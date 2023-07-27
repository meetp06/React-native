import { useRoute } from '@react-navigation/native';
import {
  ArrowsOutSimple,
  FastForward,
  Minus,
  Pause,
  Play,
  Plus,
  Rewind
} from 'phosphor-react-native';
import { useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Video, { OnProgressData } from 'react-native-video';
import { horizontalScale, moderateScale, verticalScale } from '../../../theme';
import Color from '../../../theme/Colors';
import styles from './VideoPlayerStyle';

const VideoPlayer = () => {
  const videoRef = useRef<Video>(null);
  const [paused, setPaused] = useState(true);
  const [volume, setVolume] = useState(1.0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  const onEnd = () => {
    setPaused(true);
    videoRef?.current?.seek(0);
  };

  const onProgress = (data: OnProgressData) => {
    setCurrentTime(data.currentTime);
  };

  const skipBackward = () => {
    videoRef?.current?.seek(currentTime - 10);
  };

  const skipForward = () => {
    videoRef?.current?.seek(currentTime + 10);
  };

  const decreaseVolume = () => {
    setVolume(volume > 0 ? volume - 0.1 : 0);
  };

  const increaseVolume = () => {
    setVolume(volume < 1 ? volume + 0.1 : 1);
  };
  const onLoadVideo = () => {
    setTimeout(() => {
      setPaused(!paused);
    }, 2000);
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
  const route = useRoute();
  const { title, thumb, description, sources }: any = route.params;
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.VideoControllercontainer}>
        <Text style={styles.text}>{title}</Text>

        <Video
          ref={videoRef}
          source={{ uri: sources[0].replace('http', 'https') }}
          style={styles.fullscreenVideo}
          paused={paused}
          volume={volume}
          onEnd={onEnd}
          onProgress={onProgress}
          onLoad={(data) => setDuration(data.duration)}
          playInBackground={false}
          playWhenInactive
        />

        <View style={styles.rootContainer}>
          <TouchableOpacity onPress={decreaseVolume}>
            <Minus size={moderateScale(25)} weight="bold" color={Color.White} />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipBackward}>
            <Rewind size={moderateScale(25)} weight="bold" color={Color.White} />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlayPause}>
            <Text style={styles.playPause}>
              {paused ? (
                <Play size={moderateScale(22)} weight="bold" color={Color.White} />
              ) : (
                <Pause size={moderateScale(22)} weight="bold" color={Color.White} />
              )}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={skipForward}>
            <FastForward size={moderateScale(25)} weight="bold" color={Color.White} />
          </TouchableOpacity>
          <TouchableOpacity onPress={increaseVolume}>
            <Plus size={moderateScale(25)} weight="bold" color={Color.White} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ alignSelf: 'center', bottom: verticalScale(380), right: horizontalScale(140) }}
          onPress={() => {
            if (fullscreen) {
              Orientation.lockToPortrait();
            } else {
              Orientation.lockToLandscape();
            }
            setFullscreen(!fullscreen);
          }}
        >
          <ArrowsOutSimple size={moderateScale(25)} weight="bold" color={Color.White} />
        </TouchableOpacity>
        <View style={styles.timeDurationView}>
          <Text style={styles.timeDurationText}>{`${formatTime(currentTime)} / ${formatTime(
            duration
          )}`}</Text>
        </View>
        <View style={styles.footerView}>
          <Text style={styles.descriptionText}>Description:</Text>
          <Text style={styles.desc}>{description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default VideoPlayer;
