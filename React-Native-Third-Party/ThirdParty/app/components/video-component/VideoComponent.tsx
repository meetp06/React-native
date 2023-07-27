import {
  ArrowArcLeft,
  ArrowArcRight,
  ArrowsInSimple,
  ArrowsOutSimple,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  SpeakerSimpleHigh,
  SpeakerSimpleSlash,
} from 'phosphor-react-native';
import { useContext, useEffect, useRef, useState } from 'react';
import {
  Alert,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Video from 'react-native-video';
import { Data } from '../../assets';
import { VideoContext } from '../../contexts';
import { ProgressBar } from '../progress-bar';
import styles from './VideoComponentStyles';

const VideoScreen = () => {
  const { currentVideo, setCurrentVideo } = useContext(VideoContext) as any;
  const [paused, setPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [hasVideoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);
  const [isScreenFull, setFullScreen] = useState(false);
  const [isVolume, setVolume] = useState(true);
  const isFullScreenEnabled = Platform.OS === 'android' && isScreenFull;

  const isNextVideoAvailable = currentVideo + 1 < Data.length;
  const isPreviousVideoAvailable = currentVideo - 1 > 0;

  let hideControlsTimeout;

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.currentTime);
  };

  const handleSeekBackward = () => {
    const newTime = currentTime - 10;
    if (newTime >= 0) {
      videoRef.current.seek(newTime);
      setCurrentTime(newTime);
    }
  };

  const handleSeekForward = () => {
    const newTime = currentTime + 10;
    if (newTime <= duration) {
      videoRef.current.seek(newTime);
      setCurrentTime(newTime);
    }
  };

  const handleFullScreen = () => {
    setFullScreen(true);
    videoRef.current.presentFullscreenPlayer();
  };

  const handleVolume = () => {
    setVolume(!isVolume);
  };

  const handleExitFullScreen = () => {
    setFullScreen(false);
    videoRef.current.dismissFullscreenPlayer();
  };

  const handleOnLoad = ({ currentTime: cTime, duration: dur }) => {
    setPaused(false);
    setCurrentTime(cTime);
    setDuration(dur);
    setVideoEnded(false);
  };

  const handleOnEndVideo = () => {
    setVideoEnded(true);
  };

  const handleSeek = (newTime) => {
    videoRef.current.seek(newTime);
    setCurrentTime(newTime);
  };

  const handlePreviousVideo = () => {
    if (!isPreviousVideoAvailable) {
      Alert.alert('Oops!', 'There is no previous video..');
      return;
    }

    setCurrentVideo(currentVideo - 1);
  };

  const handleNextVideo = () => {
    if (!isNextVideoAvailable) {
      Alert.alert('Oops!', 'There is no next video..');
      return;
    }

    setCurrentVideo(currentVideo + 1);
  };

  const handlePIP = () => {};

  const showControls = () => {
    clearTimeout(hideControlsTimeout);

    if (!controlsVisible) {
      setControlsVisible(true);
    }

    hideControlsTimeout = setTimeout(() => {
      setControlsVisible(false);
    }, 5000);
  };

  useEffect(() => {
    hideControlsTimeout = setTimeout(() => {
      setControlsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(hideControlsTimeout);
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={showControls}>
      <View style={styles.container}>
        <Video
          source={{ uri: Data[currentVideo].sources[0] }}
          ref={videoRef}
          pictureInPicture={true}
          paused={paused}
          playWhenInactive
          muted={!isVolume}
          onProgress={handleProgress}
          onLoad={handleOnLoad}
          onEnd={handleOnEndVideo}
          style={styles.videoPlayer}
          resizeMode='contain'
        />
        {controlsVisible && (
          <TouchableOpacity
            onPress={handleVolume}
            style={styles.sound}>
            {isVolume ? (
              <SpeakerSimpleHigh
                size={25}
                color='#FFF'
                weight='fill'
              />
            ) : (
              <SpeakerSimpleSlash
                size={25}
                color='#FFF'
                weight='fill'
              />
            )}
          </TouchableOpacity>
        )}
        {isFullScreenEnabled && (
          <TouchableOpacity
            onPress={handleExitFullScreen}
            style={styles.hideFullScreenMode}>
            <ArrowsInSimple
              size={35}
              color='#FFF'
              weight='fill'
            />
          </TouchableOpacity>
        )}
        {controlsVisible && (
          <>
            <View style={styles.controls}>
              <View style={styles.mainControlRow}>
                <TouchableOpacity
                  onPress={handlePreviousVideo}
                  style={styles.controlButton}>
                  <SkipBack
                    size={25}
                    color='#FFF'
                    weight='fill'
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSeekBackward}
                  style={styles.controlButton}>
                  <ArrowArcLeft
                    size={25}
                    color='#FFF'
                    weight='fill'
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handlePlayPause}
                  style={styles.controlButton}>
                  {paused || hasVideoEnded ? (
                    <Play
                      size={35}
                      color='#FFF'
                      weight='fill'
                    />
                  ) : (
                    <Pause
                      size={35}
                      color='#FFF'
                      weight='fill'
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSeekForward}
                  style={styles.controlButton}>
                  <ArrowArcRight
                    size={25}
                    color='#FFF'
                    weight='fill'
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleNextVideo}
                  style={styles.controlButton}>
                  <SkipForward
                    size={25}
                    color='#FFF'
                    weight='fill'
                  />
                </TouchableOpacity>
              </View>
              {!isScreenFull && (
                <View style={styles.secondaryControls}>
                  <TouchableOpacity
                    onPress={handleFullScreen}
                    style={styles.controlButton}>
                    <ArrowsOutSimple
                      size={25}
                      color='#FFF'
                      weight='fill'
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View style={styles.progressContainer}>
              <ProgressBar
                currentTime={currentTime}
                totalDuration={duration}
                onSeek={handleSeek}
              />
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VideoScreen;
