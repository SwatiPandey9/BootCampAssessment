import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Button, StyleSheet, Dimensions} from 'react-native';

const{height,width} = Dimensions.get('window')

// import { useNavigation } from '@react-navigation/native';


export default class AsyncData extends Component {

  // navigation = useNavigation();
  state = {
    userName: '',
    userEmail: '',
  };
  
  

  userData = {
    name: this.props.name,
    email: this.props.email,
    phone: this.props.phone,
    password: this.props.password,
    confirmPassword: this.props.confirmPassword,
  };

  // componentDidMount(){
  //   console.log('hellow')
  //   AsyncStorage.setItem('userName', JSON.stringify(this.props.name));
  //   console.log('')
  //   currentUserName =  AsyncStorage.getItem('userName');
  //   console.log(currentUserName)
  // }
  

  setUserData = async () => {
    console.log(this.props.name);
    console.log(this.props.email);
    console.log('data saved');
    await AsyncStorage.setItem('userName', JSON.stringify(this.props.name));
    await AsyncStorage.setItem('userEmail', JSON.stringify(this.props.email));
    await AsyncStorage.setItem('userData', JSON.stringify(this.userData));
    console.log('Data saved');
  };

  getData = async () => {
    const currentUserName = await AsyncStorage.getItem('userName');
    const currentUserEmail = await AsyncStorage.getItem('userEmail');
    const currentUserData = await AsyncStorage.getItem('userData');

    this.setState({
      userName: JSON.parse(currentUserName),
      userEmail: JSON.parse(currentUserEmail),
    });

    console.log('getting user data');
    console.log(currentUserName);
    console.log(currentUserEmail);
    console.log(currentUserData);
  };

  asyncData = () => {
    this.setUserData();
    this.getData();
    this.props.navigation.navigate('Home')
    // console.log(this.props.navigation)
  };

  render() {
    
    console.warn(this.props)
    // naviagtion = this.props.navigation
    return (
       
      <View>
        {/* <Text>{this.state.userName}</Text>
        <Text>{this.state.userEmail}</Text>
        <TouchableOpacity onPress={this.asyncData} style={styles.setData}>
          <Text style={styles.textInput}>set Data</Text>
        </TouchableOpacity> */}

{/* <TouchableOpacity
            style={styles.createButton}
            onPress={
              this.props.navigation.navigate('Home')
             this.asyncData
            }>
            <Text style={styles.createButtonText}>CREATE</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => this.navigation.navigate('Home')}><Text>Home</Text></TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // createButton: {
  //   backgroundColor: '#005ce6',
  //   padding: 15,
  //   width: width / 2.5,
  //   borderRadius: 50,
  //   marginTop: height / 70,
  // },
  // createButtonText: {
  //   color: '#fff',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
})
