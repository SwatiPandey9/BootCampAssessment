import TrackPlayer, {Capability, RepeatMode} from 'react-native-track-player';
import SongData from '../utils/SongData';

const setupIfNecessary = async () => {
  // if app was relaunched and music was already playing, we don't setup again.
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    return;
  }

  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
  });

  // await TrackPlayer.add(playlistData);
  await TrackPlayer.add(SongData.songs);

  TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export default setupIfNecessary;
