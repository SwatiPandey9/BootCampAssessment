import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import AudioPlayIcons from '../components/AudioPlayIcons';
import setupIfNecessary from '../components/setupIfNecessary';
import { Images, Colors } from '../utils';

const {height, width} = Dimensions.get('window')

const togglePlayback = async (playbackState = State) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack == null) {
    // TODO: Perhaps present an error or restart the playlist?
  } else {
    if (playbackState !== State.Playing) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

const Media = () => {
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const [trackArtwork, setTrackArtwork] = useState();
  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist] = useState();

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (
      event.type === Event.PlaybackTrackChanged &&
      event.nextTrack !== undefined
    ) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork} = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
      console.log(trackArtwork)
    }
  });

  useEffect(() => {
    setupIfNecessary();
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.contentContainer}>

        <View style={styles.artworkContainer}>
        <Image style={styles.artwork} source={trackArtwork} />
        </View>

        <Text style={styles.titleText}>{trackTitle}</Text>
        <Text style={styles.artistText}>{trackArtist}</Text>

        <View>
        <Slider
          style={styles.progressContainer}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          thumbTintColor={Colors.thumbTintColor}
          minimumTrackTintColor={Colors.minimumTrackTintColor}
          maximumTrackTintColor={Colors.maximumTrackTintColor}
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
        </View>

        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabelText}>
            {new Date(progress.position * 1000).toISOString().substr(14, 5)}
          </Text>
          <Text style={styles.progressLabelText}>
            {new Date((progress.duration - progress.position) * 1000)
              .toISOString()
              .substr(14, 5)}
          </Text>
        </View>
      </View>

      <View style={styles.actionRowContainer}>
        <AudioPlayIcons onPress={() => TrackPlayer.skipToPrevious()}
            source={Images.image.playBack}
            style={{marginTop: height * 0.01}}/>
        
        <AudioPlayIcons onPress={() => togglePlayback(playbackState)}
           source={playbackState === State.Playing ? Images.image.pause : Images.image.play} 
           style={{height: 50, width: 50}}
        /> 
        <AudioPlayIcons 
         onPress={() => TrackPlayer.skipToNext()}
         source={Images.image.playNext}
         style={{marginTop: height * 0.01}}/>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.AudioBackgroundColor,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  artworkContainer:{
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height / 10,
  },
  artwork: {
    height: height / 3,
    width: width / 1.42,
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: height / 50,
  },
  titleText: {
    fontSize: height / 50,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.songTitle,
  },
  artistText: {
    fontSize: height / 60,
    fontWeight: '200',
    textAlign: 'center',
    color: Colors.songTitle,
  },
  progressContainer: {
    width: width * 0.8,
    height: height / 50,
    flexDirection: 'row',
    marginTop: height / 10,
  },
  progressLabelContainer: {
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color:Colors.sliderTxtColor,
    fontVariant: ['tabular-nums'],
  },
  actionRowContainer: {
    flexDirection: 'row',
    width: width * 0.65,
    marginTop: height / 30,
    justifyContent: 'space-between',
    marginBottom: height / 7,
  },
});

export default Media;