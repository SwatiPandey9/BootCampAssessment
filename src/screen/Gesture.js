import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');
import {PanGestureHandler} from 'react-native-gesture-handler';

const Gesture = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <View>
        <Text>Pan Gesture Handling</Text>
        <Circle />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
});

const circleRadius = 30;
console.log(width / 2 - circleRadius);
class Circle extends Component {
  xy = new Animated.ValueXY({x:width / 1.8 - circleRadius, y:height / 3 - circleRadius });
  // y = new Animated.Value(height / 3 - circleRadius);

  _onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {x: this.xy.x, y: this.xy.y},
      },
    ],
    {
      useNativeDriver: true,
    },
  );
  render() {
    return (
      <PanGestureHandler onGestureEvent={this._onPanGestureEvent}>
        <Animated.View
          style={{
            height: 100,
            justifyContent: 'center',
            // alignItems:'center'
          }}>
          <Animated.View
            style={[
              {
                backgroundColor: '#42a5f5',
                borderRadius: circleRadius,
                height: circleRadius * 2,
                width: circleRadius * 2,
              },
              {
                transform: [
                  {
                    translateX: Animated.add(
                      this.xy.x,
                      new Animated.Value(-circleRadius),
                    ),
                  },
                  {
                    translateY: Animated.add(
                      this.xy.y,
                      new Animated.Value(-circleRadius),
                    ),
                  },
                ],
              },
            ]}
          />
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

export default Gesture;
