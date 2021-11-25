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

class AddEmpDetails extends Component {
  state = {
    employeeId: '',
    name: '',
    designation: '',
    salary: '',
  };

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

//     async componentDidMount

  async componentDidMount () {
    const employeeSchema = {
        name: 'Employee',
        properties: {
          _id: 'string',
          name: 'string',
          designation: 'string',
          salary: 'string',
        },
      
      };
      var realm = new Realm({schema: [employeeSchema]})
    // this.realm = await Realm.open({
    //   schema: [employeeSchema],
    // });
    console.log(realm.objects('Employee'));
    realm.write(async () => {
        details = await realm.create('Employee', {
          _id: '1',
          name: 'Radhika',
          designation: 'HR',
          salary: '45000',
        });
        console.log(details);
      });
    // realm.write(() => {
    //     details = realm.create('Employee', {
    //       _id: Number(this.state.employeeId),
    //       name: this.state.name,
    //       designation: this.state.designation,
    //       salary: Number(this.state.salary),
    //     });
    //     console.log(`details ${details}`);
    //   });
  }

  saveData =  () => {
        this.realm.write(async () => {
        details = await this.realm.create('Employee', {
          _id: '1',
          name: 'Radhika',
          designation: 'HR',
          salary: '45000',
        });
        console.log(details);
      });
    //   this.realm.close()
  }
//   componentWillUnmount(){
//     this.realm.close()
//   }

  render() {
    return (
      <SafeAreaView style={styles.container}>
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
    // backgroundColor:'green'
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: height / 15,
    right: width / 12,
    padding: height / 50,
    borderRadius: 10,
    backgroundColor: '#BDC3C7',
  },
  buttontext: {
    fontWeight: 'bold',
  },
});

export default AddEmpDetails;
