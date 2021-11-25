import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default function CustomButton(props) {
  return (
    <TouchableOpacity style={[styles.createButton, props.style]} onPress={props.onPress}>
      <Text style={styles.createButtonText}>{props.name}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  createButton: {
    backgroundColor: '#005ce6',
    padding: 15,
    width: width / 2.5,
    borderRadius: 50,
    marginTop: height / 70,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



