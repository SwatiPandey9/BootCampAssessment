import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

import Authentication from './src/screen/Authentication'

const App = () => {
  return (
    <View style={styles.container}>
    <Authentication />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
