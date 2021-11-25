import React from 'react';
import {Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');


export default function Footer(props) {
  return (
    <TouchableOpacity style={styles.footerContainer}>
      <Text style={styles.footerText}>{props.footerText}</Text>
      <Text style={styles.loginText}>{props.login}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    marginTop: height / 18,
    marginBottom: height / 30,
  },
  footerText: {
    color: 'grey',
    fontWeight: '700',
  },
  loginText: {
    color: '#005ce6',
    fontWeight: 'bold',
  },
});
