import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {HomeScreen, Profile} from '../screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();


const TabNav = () => {
    return(
        <NavigationContainer>        
        <Tab.Navigator>
            <Tab.Screen name='HomeScreen' component={HomeScreen} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
        </NavigationContainer>

    )
};

// const TabNavigation = () => {
//     return(
//         <NavigationContainer>
//             <RootStack name='TabNav' component={TabNav} />
//         </NavigationContainer>
//     )
// }

export default TabNav;