import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import {
  cameraToggleImage,
  flashImage,
  flashOffImage,
  pauseVideo,
  playVideo,
  stopVideo,
} from '../../assets';

export default VisionCameraScreen = () => {
  const devices = useCameraDevices();
  const camera = useRef(null);
  const device = devices.back;
  const [showCamera, setShowCamera] = useState(true);
  const [videoRecordStart, setVideoRecordStart] = useState(false);
  const [toggleVideoCamera, setToggleVideoCamera] = useState('camera');
  const [imageSource, setImageSource] = useState('');
  const [toggleCamera, setToggleCamera] = useState(true);
  const [flash, setFlash] = useState('off');
  const [toggleVideoRecord, setToggleVideoRecord] = useState(false);

  useEffect(() => {
    const requestForPermissions = async () => {
      await Camera.requestCameraPermission();
      await Camera.requestMicrophonePermission();
    };
    requestForPermissions();
  }, []);

  const capturePhoto = async () => {
    const photo = await camera.current.takePhoto();
    setImageSource(photo);
    setShowCamera(false);
    console.log(photo);
  };

  const captureVideo = async () => {
    setVideoRecordStart(true);
    await camera.current.startRecording({
      flash: 'on',
      onRecordingFinished: (video) => {
        console.log(video);
        setImageSource(video);
        setShowCamera(false);
      },
      onRecordingError: (error) => console.error(error),
    });
  };

  if (device === undefined)
    return <ActivityIndicator style={styles.indicator} />;

  return (
    <View style={styles.container}>
      {showCamera ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={toggleCamera ? device : devices.front}
            isActive={showCamera}
            photo={true}
            torch={flash}
            enableZoomGesture={true}
            video={true}
          />
          <View style={styles.cameraVideoView}>
            <Pressable onPress={() => setToggleVideoCamera('camera')}>
              <Text
                style={
                  toggleVideoCamera === 'camera'
                    ? styles.cameraVideoSelectedText
                    : styles.cameraVideoText
                }>
                Camera
              </Text>
            </Pressable>
            <Pressable onPress={() => setToggleVideoCamera('video')}>
              <Text
                style={
                  toggleVideoCamera === 'camera'
                    ? styles.cameraVideoText
                    : styles.cameraVideoSelectedText
                }>
                Video
              </Text>
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            {videoRecordStart ? (
              <TouchableOpacity
                onPress={async () => {
                  await camera.current.pauseRecording();
                  setToggleVideoRecord(true);
                }}>
                <Image
                  style={styles.flashImage}
                  tintColor={toggleVideoRecord ? 'grey' : 'white'}
                  source={pauseVideo}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  flash === 'on' ? setFlash('off') : setFlash('on')
                }>
                <Image
                  tintColor='white'
                  style={styles.flashImage}
                  source={flash === 'on' ? flashImage : flashOffImage}
                />
              </TouchableOpacity>
            )}
            {videoRecordStart ? (
              <TouchableOpacity
                onPress={async () => {
                  await camera.current.stopRecording();
                  setVideoRecordStart(false);
                }}>
                <Image
                  tintColor={toggleVideoRecord ? 'grey' : 'white'}
                  style={styles.cameraButton}
                  source={stopVideo}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={
                  toggleVideoCamera === 'camera' ? capturePhoto : captureVideo
                }>
                <View
                  style={
                    toggleVideoCamera === 'camera'
                      ? styles.cameraButton
                      : styles.videoButton
                  }
                />
              </TouchableOpacity>
            )}
            {videoRecordStart ? (
              <TouchableOpacity
                onPress={async () => {
                  await camera.current.resumeRecording();
                  setToggleVideoRecord(false);
                }}>
                <Image
                  tintColor={toggleVideoRecord ? 'white' : 'grey'}
                  style={styles.flashImage}
                  source={playVideo}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  toggleCamera ? setToggleCamera(false) : setToggleCamera(true)
                }>
                <Image
                  source={cameraToggleImage}
                  resizeMode='contain'
                  style={styles.toggleImage}
                />
              </TouchableOpacity>
            )}
          </View>
        </>
      ) : (
        <>
          {imageSource?.height !== undefined ? (
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{
                uri: `file://'${imageSource?.path}`,
              }}
            />
          ) : (
            <Video
              source={{
                uri: imageSource?.path,
              }}
              resizeMode='contain'
              style={styles.image}
            />
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.takePhotoButton}
              onPress={() => setShowCamera(true)}>
              <Text style={styles.takePhotoText}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cameraVideoView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  cameraVideoText: {
    fontSize: 18,
    color: 'white',
    margin: 8,
    fontWeight: 'bold',
  },
  cameraVideoSelectedText: {
    fontSize: 18,
    color: 'yellow',
    margin: 8,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 20,
  },
  cameraButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#B2BEB5',
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  videoButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'red',
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  toggleImage: {
    height: 40,
    width: 40,
    tintColor: 'grey',
  },
  indicator: {
    margin: 5,
  },
  flashImage: {
    height: 35,
    width: 35,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  takePhotoText: {
    color: 'dodgerblue',
    fontSize: 15,
    fontWeight: 'bold',
  },
  takePhotoButton: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'dodgerblue',
  },
});
