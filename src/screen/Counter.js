import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import CustomTouchableButtons from '../components/CustomTouchableButtons';
import {
  decrementCounterAction,
  incrementCounterAction,
} from '../redux/actions/CounterActions';
import Images from '../utils/Images';

const {height, width} = Dimensions.get('window');

class Counter extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headeingText}> Counter Application </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={this.props.incrementCounter}>
            <Image source={Images.images.plus} style={styles.image} />
            <Text style={styles.buttonText}>{`Increase`}</Text>
          </TouchableOpacity>
          <Text style={styles.value}>{this.props.value}</Text>
          <TouchableOpacity onPress={this.props.decrementCounter}>
            <Image source={Images.images.minus} style={styles.image} />
            <Text style={styles.buttonText}>{`Decrease`}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headeingText: {
    textAlign: 'center',
    fontSize: 50,
  },
  button: {
    marginTop: height / 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  value: {
    fontSize: height / 20,
    marginHorizontal: width / 10,
  },
  buttonText: {
    fontSize: height / 30,
  },
});

const mapStateToProps = state => {
  return {value: state.counterValue.counter};
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => incrementCounterAction(dispatch),
    decrementCounter: () => decrementCounterAction(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
