import { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Video from 'react-native-video';
import { Data } from '../../assets';
import { ProgressBar } from '../../components';
import { applicationStyles } from '../../theme';
import styles from './HomeScreenStyles';

const HomeScreenWithVideo = () => {
  const videoRef = useRef(null);
  const videoDuration = useRef(0);
  const [currentTime, setCurrentTime] = useState(0.0);

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: Data[0].sources[0],
          type: 'mp4',
          headers: {
            range: 'bytes=0-',
          },
        }}
        ref={videoRef}
        pictureInPicture={true}
        style={styles.video}
        // currentTime={15} // for jumping to that sec
        playInBackground={true}
        onLoad={(data) => {
          videoDuration.current = data.duration;
          // videoRef.current.seek(27); // for direct seek
        }}
        onBuffer={(data) => {
          console.log('====================================');
          console.log(data, 'inside the buffer');
          console.log('====================================');
        }}
        onError={(error) => {
          console.log('====================================');
          console.log(`Error while playing the video`, error);
          console.log('====================================');
        }}
        onSeek={(data) => {
          // console.log('====================================');
          // console.log(data);
          // console.log('====================================');
        }}
        // repeat
        onProgress={(data) => {
          setCurrentTime(data.currentTime);
        }}
        // onAudioBecomingNoisy={}
        // fullscreen={true}
        // audioOnly={true}
        // poster={Images.overlayImage}
        controls={true} // Display playback controls
        resizeMode='contain' // Adjust video aspect ratio to fit the container
        onEnd={() => {
          console.log('====================================');
          console.log('video ended');
          console.log('====================================');
        }}
      />
      <View style={applicationStyles.screen}>
        <Text style={styles.centerText}>The video is playing</Text>
        <ProgressBar
          currentTime={currentTime}
          totalDuration={videoDuration.current}
        />
      </View>
    </View>
  );
};

export default HomeScreenWithVideo;
