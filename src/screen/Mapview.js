import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

import MapView, {Callout, Marker} from 'react-native-maps';

const Mapview = () => {
  const [pin, setPin] = useState({latitude: 28.63714, longitude: 77.33267});

  const coordinateArray = [
    {
      latitude: 28.63473,
      longitude: 77.33267,
    },
    {
      latitude: 28.63674,
      longitude: 77.33266,
    },
    {
      latitude: 28.63545,
      longitude: 77.33266,
    },
  ];

  return (
    <SafeAreaView style={styles.conatiner}>
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 28.63714,
            longitude: 77.33267,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // provider='google'
        >
          <Marker
            coordinate={pin}
            draggable={true}
            onDragStart={e => {
              console.log('Drag start', e.nativeEvent.coordinates);
            }}
            onDragEnd={e => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          >
            <Callout>
              <Text>I'm Here</Text>
            </Callout>
          </Marker>
          {coordinateArray.map((x, i) => (
            <Marker key={i} coordinate={x} />
          ))}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  map: {
    height: height,
    width: width,
  },
});

export default Mapview;
