import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Colors} from '../utils';

const {height, width} = Dimensions.get('window');

const CustomViewIcon = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image source={props.image} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: height / 30,
    width: height / 30,
    tintColor: Colors.iconColor,
  },
});

export default CustomViewIcon;
