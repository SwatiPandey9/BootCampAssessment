import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Geolocation, AudioPlayer, VideoPlayer, Content, Media} from '../screen';

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Content" component={Content} />
        <Stack.Screen name="AudioPlayer" component={AudioPlayer}/>
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        <Stack.Screen name="Geolocation" component={Geolocation}  />
        <Stack.Screen name="Media" component={Media} options={{headerShown:false}} />
        </Stack.Navigator>
  );
};

const Navigation = () => {
    return (
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown : false}}>
          <RootStack.Screen name="StackNav" component={StackNav} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Navigation;
  

