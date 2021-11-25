import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EmployeeScreen, AddEmpDetails } from '../screen';

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

import React from 'react'
// import { View, Text } from 'react-native'

const Stacknav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='EmployeeScreen' component={EmployeeScreen} options={{headerShown : false}}/>
            <Stack.Screen name='AddEmpDetails' component={AddEmpDetails} options={{headerShown : false}}/>
        </Stack.Navigator>
    )
}

const Navigation = () => {
    return (
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown : false}}>
          <RootStack.Screen name="Stacknav" component={Stacknav} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Navigation;
  

