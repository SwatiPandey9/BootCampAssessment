import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { Component } from 'react'
import { Text, View , SafeAreaView, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native'

const {height, width} = Dimensions.get('window');
import {Header, InputText} from '../components';
// import {InputText} from '../components';
import {setSaveData} from '../utils/CommonFunctions'


export default class Home extends Component {
    state={
        userName: '',
        userEmail: '',
        userPhone: '',
        address:'',
        userAddresss : ''
    }

    getData = async () => {
        const currentUserName = await AsyncStorage.getItem('userName');
        const currentUserEmail = await AsyncStorage.getItem('userEmail');
        const currentUserPhone = await AsyncStorage.getItem('userPhone');
    
        this.setState({
          userName: currentUserName,
          userEmail: currentUserEmail,
          userPhone: currentUserPhone,
        });
    
      };
    
      componentDidMount(){
          this.getData()
      }

      addressFun = text => {
        this.setState({address: text});
      };

    saveData = async () => {
        
       const value =  await setSaveData(this.state.address)
        
       this.setState({
           userAddresss: value
       })
        
      }

    

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                <View style={styles.innerContainer}>
                <Header 
                    title="Welcome to Q Allure"
                    subTitle="User Profile"
                />
                <Text>{this.state.userName}</Text>
                <Text>{this.state.userEmail}</Text>
                <Text>{this.state.userPhone}</Text>
                <InputText 
                    name = 'Enter Address'
                    value={this.state.address}
                    changeText={(text) => {this.addressFun(text)}}
                />
                <Text>{this.state.address}</Text>
                <TouchableOpacity onPress={() => {this.saveData()}}>
                    <Text>
                        Save Data
                    </Text>
                </TouchableOpacity>
                <Text> address ------ {this.state.userAddresss}</Text>
                </View>
                </ScrollView>
            </SafeAreaView>
            
        )
    }
};

const styles = StyleSheet.create({
    innerContainer: {
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        height:height/2.3 * 2


      },
})

