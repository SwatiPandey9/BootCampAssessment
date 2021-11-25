import React from 'react';
import {Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {UseAlert} from '../utils/CommonFunctions';

import Home from '../screen/Home';
import Signup from '../screen/Signup';

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const Stacknav = () => {
  // const UseAlert = (navigation) =>{
  //   Alert.alert(
  //     "Hold On",
  //     "Do you want to logout",
  //     [
  //       {
  //         text: "Yes",
  //         onPress: () => navigation.navigate('Signup')
  //       },
  //       { text: "No", onPress: () => null}
  //     ]
  //   );
  //  }

  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerRight: () => (
            <Button
              title={'Logout'}
              onPress={() => {
                UseAlert(navigation);
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Stacknav" component={Stacknav} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
