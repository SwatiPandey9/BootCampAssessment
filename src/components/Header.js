import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default function Header(props) {
  return (
    <View>
      <Text style={styles.headingText}>{props.title}</Text>
      <Text style={styles.subHeadingText}>{props.subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    textAlign: 'center',
    fontSize: width * 0.08,
    fontWeight: 'bold',
    marginTop: height / 10,
    marginBottom: height / 75,
  },
  subHeadingText: {
    color: 'grey',
    fontSize: 15,
  },
});
