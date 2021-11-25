import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';
import Video from 'react-native-video';
// import VideoPlayer from 'react-native-video-player'

const {height, width} = Dimensions.get('window');

const Videoplayer = () => {
  const [play, setplay] = useState(true);

// const progress = (data) =>{
//     console.log('data in onProgress')
//     console.log(data)
// }
// {uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}
// ../../src/pexels-mikhail-nilov-7677686.mp4
  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={require('../../src/pexels-mikhail-nilov-7677686.mp4')} // Can be a URL or a local file.
        controls ={true}
        // paused={play}
        // fullscreen={true}
        style={styles.video}
        // onProgress={() => progress(data)}
      />
      {/* <View style={styles.playContainer}>
      <TouchableOpacity
        onPress={() => setplay(false)}
      >
        <Text>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setplay(true)}
        // 
        >
        <Text>Pause</Text>
      </TouchableOpacity>
      
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  // playContainer:{
  //     flex:1,

  // }
});

export default Videoplayer;
