import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import Slider from '@react-native-community/slider';
import AudioPlayIcons from '../components/AudioPlayIcons';
import TrackPlayer,
{Capability,Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,} from 'react-native-track-player';

import {Colors, Images, SongData} from '../utils';

const {height, width} = Dimensions.get('window');

const setupPlayer = async() => {
  await TrackPlayer.setupPlayer({});

  await TrackPlayer.add(SongData)
}

const togglePlayback = async(playbackState) =>{
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if(currentTrack!==null){
    return;
}
await TrackPlayer.setupPlayer({});
await TrackPlayer.updateOptions({
    stopWithApp:false,
    capabilities:[
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
        Capability.SkipToNext,
        Capability.SkipToPrevious
    ],
    compactCapabilities:[
        Capability.Play,Capability.Pause
    ]
});
await TrackPlayer.add(SongData.songs)
//   if( currentTrack !== null){
//       if(playbackState == State.Paused){
//           await TrackPlayer.play();
//       } 
//       else{
//           await TrackPlayer.pause();
//       }
//   }
}

const AudioPlayer = () => {
  const playbackState = usePlaybackState();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);
  const songSlider = useRef(null);

  useEffect(() => {
    togglePlayback();
    scrollX.addListener(({value}) => {
      const index = Math.round(value / width);
      setSongIndex(index);
    });
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const skiptoNext = () => {
    songSlider.current.scrollToOffset({offset: (songIndex + 1) * width});
  };

  const skiptoPrevious = () => {
    songSlider.current.scrollToOffset({offset: (songIndex - 1) * width});
  };

  const renderSong = ({index, item}) => {
    return (
      <Animated.View style={styles.renderSongContainer}>
        <View style={styles.imageArtworkspace} key={index}>
          <Image source={item.artwork} style={styles.imageWork} />
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.flatlistContainer}>
          <Animated.FlatList
            ref={songSlider}
            data={SongData.songs}
            renderItem={renderSong}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: scrollX},
                  },
                },
              ],
              {useNativeDriver: true},
            )}
          />
        </View>
        <View>
          <Text style={styles.songTitle}>
            {SongData.songs[songIndex].title}
          </Text>
          <Text style={styles.songArtist}>
            {SongData.songs[songIndex].artist}
          </Text>
        </View>
        <View>
          <Slider
            style={styles.slider}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor={Colors.thumbTintColor}
            minimumTrackTintColor={Colors.minimumTrackTintColor}
            maximumTrackTintColor={Colors.maximumTrackTintColor}
            onSlidingComplete={() => {}}
          />
        </View>
        <View style={styles.sliderLabelContainer}>
          <Text style={styles.sliderTxt}>0.00</Text>
          <Text style={styles.sliderTxt}>3.55</Text>
        </View>
        <View style={styles.musicControls}>
          <AudioPlayIcons
            onPress={() => skiptoPrevious()}
            source={Images.image.playBack}
            style={{marginTop: height * 0.01}}
          />
          <AudioPlayIcons
            onPress={() => togglePlayback(playbackState)}
            source={playbackState === State.Playing ? Images.image.pause : Images.image.play}
            style={{height: 50, width: 50}}
          />
          <AudioPlayIcons
            onPress={() => skiptoNext()}
            source={Images.image.playNext}
            style={{marginTop: height * 0.01}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.AudioBackgroundColor,
  },
  renderSongContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height / 10,
    backgroundColor: 'yellow',
    // height: height / 2,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  flatlistContainer: {
    width: width,
    // height: height/2.4
  },
  imageArtworkspace: {
    height: height / 3,
    width: width / 1.42,
    marginBottom: 25,
    backgroundColor: '#fff',
  },
  imageWork: {
    height: height / 3,
    width: width / 1.42,
    borderRadius: height / 50,
  },
  songTitle: {
    fontSize: height / 50,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.songTitle,
  },
  songArtist: {
    fontSize: height / 60,
    fontWeight: '300',
    textAlign: 'center',
    color: Colors.songTitle,
  },
  slider: {
    width: width * 0.8,
    height: height / 50,
    flexDirection: 'row',
    marginTop: height / 30,
  },
  sliderLabelContainer: {
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderTxt: {
    color: Colors.sliderTxtColor,
  },
  musicControls: {
    flexDirection: 'row',
    width: width * 0.65,
    marginTop: height / 30,
    justifyContent: 'space-between',
    marginBottom: height / 7,
  },
});
export default AudioPlayer;
