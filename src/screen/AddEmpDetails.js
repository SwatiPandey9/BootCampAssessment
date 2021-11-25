import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CustomTextinput from '../components/CustomTextinput';

import Realm from 'realm';

const {height, width} = Dimensions.get('window');

// const employeeSchema = {
//   name: 'Employee',
//   properties: {
//     _id: 'int',
//     name: 'string',
//     designation: 'string',
//     salary: 'int',
//   },
// };


class AddEmpDetails extends Component {
  state = {
    employeeId: '',
    name: '',
    designation: '',
    salary: '',
  };

// setState ------------------

  changeEmployeeId = text => {
    this.setState({
      employeeId: text,
    });
  };

  changeName = text => {
    this.setState({
      name: text,
    });
  };

  changeDesignation = text => {
    this.setState({
      designation: text,
    });
  };

  changeSalary = text => {
    this.setState({
      salary: text,
    });
  };

// componentDidMount(){
//    this.realm = new Realm({schema: [employeeSchema]})
// }

// Saving Data in DB -----------------

 saveData = () => {

// Define schema ---------------------
const employeeSchema = {
  name: 'Employee',
  properties: {
    _id: 'string',
    name: 'string',
    designation: 'string',
    salary: 'string',
  },
};

this.realm = new Realm({schema: [employeeSchema]})
    // this.realm = await Realm.open({
    //   schema: [employeeSchema],
    // });
    // console.log(realm.objects('Employee'));
    const {employeeId, name, salary, designation} = this.state
    if(employeeId.length  === '' || name.length == '' || salary.length === '' || designation.length == '' ){
      alert('Please fill all details')
    }
    else
    {
      this.realm.write( () => {
        details =  this.realm.create('Employee', {
          _id: this.state.employeeId,
          name: this.state.name,
          designation: this.state.designation,
          salary: this.state.salary,
        });
        console.log(details);
      });
      this.props.navigation.goBack()
    }
    // realm.write(async () => {
    //     details = await realm.create('Employee', {
    //       _id: this.state.employeeId,
    //       name: this.state.name,
    //       designation: this.state.designation,
    //       salary: this.state.salary,
    //     });
    //     console.log(details);
    //   });
    //   this.props.navigation.goBack()
    
  }

  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Employee Deatils</Text>
          </View>

        <CustomTextinput
          name="Employee ID"
          value={this.state.employeeId}
          onChange={text => this.changeEmployeeId(text)}
        />
        <CustomTextinput
          name="Employee Name"
          value={this.state.name}
          onChange={text => this.changeName(text)}
        />
        <CustomTextinput
          name="Designation"
          value={this.state.designation}
          onChange={text => this.changeDesignation(text)}
        />
        <CustomTextinput
          name="Salary"
          value={this.state.salary}
          onChange={text => this.changeSalary(text)}
        />

    {/* Save Data Button -------------- ----------------- ----------------*/}

        <View style={styles.button}>
          <TouchableOpacity onPress={() => this.saveData()}>
            <Text style={styles.buttontext}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F7DC6F'
  },
  header: {
    width: width,
    backgroundColor: '#F1C40F',
    // justifyContent: 'space-between',
    alignSelf: 'center',
    padding: height / 50,
    // flexDirection: 'row',
  },
  headerText: {
    textAlign: 'center',
    fontSize: height / 28,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: height / 15,
    right: width / 12,
    padding: height / 50,
    borderRadius: 10,
    backgroundColor: '#F1C40F',
  },
  buttontext: {
    fontWeight: 'bold',
  },
});

export default AddEmpDetails;
