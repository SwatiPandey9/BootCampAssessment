import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Realm from 'realm';

import SortedData from './SortedData';

import AddEmpDetails from './AddEmpDetails';

const {height, width} = Dimensions.get('window');

class EmployeeScreen extends Component {
  _isMounted = false;

  state = {
    arr: [],
    sortedArray: [],
    getSortData: false,
  };

  // Get Data ---------------

  _unsubscribe = async () => {
    const employeeSchema = {
      name: 'Employee',
      properties: {
        _id: 'string',
        name: 'string',
        designation: 'string',
        salary: 'string',
      },
    };
    this.realm = await Realm.open({
      schema: [employeeSchema],
    });

    const data = this.realm.objects('Employee');

    this.setState({
      arr: data,
    });
  };

  // Get Sorted Data (Employee Salary) in Descending Order ----------------

  sorting = () => {
    this.setState({
      getSortData: true,
    });
    const empSortData = this.realm.objects('Employee');
    const sortedBySalary = empSortData.sorted('salary', true);
    console.log(sortedBySalary);
    this.setState({
      sortedArray: sortedBySalary,
    });
  };

  // Calling unsubscribe function inside componentDidMount() -----------------

  async componentDidMount() {
    this.props.navigation.addListener('focus', async () => {
      this._unsubscribe();
    });
  }

  // componentWillUnmount() {
  //   this._isMounted = false;
  //   this._unsubscribe();
  // }

  // Get Employee details ------------------

  getEmpDetails = rawData => {
    const {item, index} = rawData;
    return (
      <View style={styles.employeeList}>
        <Text>Emp_ID: {item._id}</Text>
        <Text>Name: {item.name}</Text>
        <Text>Designation: {item.designation}</Text>
        <Text>Salary: {item.salary}</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              this.setState({getSortData: false});
            }}>
            <Text style={styles.headerText}>Employee Deatils</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddEmpDetails')}>
            <Text style={styles.headerText}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.sorting()}>
            <Text style={styles.headerText}>Sort</Text>
          </TouchableOpacity>
        </View>

        {/* Check condition if array is empty or not  &&  when to call sorted Employee list */}

        {this.state.arr.length === 0 ? (
          <Text style={styles.displayText}>
            No employees found. Please Add Employee
          </Text>
        ) : this.state.getSortData ? (
          <SortedData sortedData={this.state.sortedArray} />
        ) : (
          <FlatList
            data={this.state.arr}
            renderItem={this.getEmpDetails}
            keyExtractor={(item, index) => index}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7DC6F',
  },
  header: {
    width: width,
    backgroundColor: '#F1C40F',
    justifyContent: 'space-between',
    alignSelf: 'center',
    padding: height / 50,
    flexDirection: 'row',
  },
  headerText: {
    textAlign: 'center',
    fontSize: height / 28,
  },
  displayText: {
    textAlign: 'center',
    marginTop: height / 3,
  },
  employeeList: {
    backgroundColor: '#FCF3CF',
    margin: height / 40,
    padding: height / 50,
    borderRadius: height / 50,
  },
});

export default EmployeeScreen;
