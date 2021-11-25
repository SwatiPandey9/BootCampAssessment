import React from 'react';
import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Stacknav from './src/routes/Stacknav';

const Stack = createNativeStackNavigator();

const App = () => {
  return <Stacknav />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
