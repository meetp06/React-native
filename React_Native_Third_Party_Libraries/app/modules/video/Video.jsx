import {useRoute} from '@react-navigation/native';
import {
  ArrowsIn,
  ArrowsOutSimple,
  FastForward,
  Minus,
  Pause,
  Play,
  Plus,
  Rewind,
} from 'phosphor-react-native';
import {useRef, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
import styles from './VideoStyles';
const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);
  const [volume, setVolume] = useState(1.0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  const onEnd = () => {
    setPaused(true);
    videoRef.current.seek(0);
  };

  const onProgress = data => {
    setCurrentTime(data.currentTime);
  };

  const skipBackward = () => {
    videoRef.current.seek(currentTime - 10);
  };

  const skipForward = () => {
    videoRef.current.seek(currentTime + 10);
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
  const formatTime = time => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
  const route = useRoute();
  const {title, thumb, description, sources} = route.params;
  return (
    <ScrollView contentContainerStyle={{justifyContent: 'center'}}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Video
          ref={videoRef}
          source={{uri: sources[0].replace('http', 'https')}}
          style={fullscreen ? styles.fullscreenVideo : styles.video}
          paused={paused}
          volume={volume}
          controls={true}
          onEnd={onEnd}
          onProgress={onProgress}
          onLoad={data => setDuration(data.duration)}
          resizeMode={fullscreen ? 'contain' : 'none'}
          playInBackground={false}
          playWhenInactive
        />

        <View style={styles.controls}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '100%',
            }}>
            <TouchableOpacity onPress={skipBackward}>
              <Rewind size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <Text style={{marginTop: 4}}>
                {paused ? <Play size={22} /> : <Pause size={22} />}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={skipForward}>
              <FastForward size={25} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '100%',
              margin: 15,
            }}>
            <TouchableOpacity onPress={decreaseVolume}>
              <Minus size={25} />
            </TouchableOpacity>
            <Text style={{marginTop: 6}}>{`${formatTime(
              currentTime,
            )} / ${formatTime(duration)}`}</Text>
            <TouchableOpacity onPress={increaseVolume}>
              <Plus size={25} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={toggleFullscreen}>
            <Text style={{margin: 10}}>
              {fullscreen ? (
                <ArrowsIn size={25} />
              ) : (
                <ArrowsOutSimple size={25} />
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default VideoPlayer;
