// import {useEffect, useRef, useState} from 'react';
// import {
//   ActivityIndicator,
//   PermissionsAndroid,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import {request} from 'react-native-permissions';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';
// import styles from './HomeStyles';

// const VerticalThreeButton = () => {
//   const [cameraPhoto, setCameraPhoto] = useState();
//   const [tapedPhoto, setTapedPhoto] = useState();
//   useEffect(() => {
//     checkPermission();
//   }, []);
//   const camera = useRef(null);
//   const devices = useCameraDevices();
//   const device = devices.back;

//   const checkPermission = async () => {
//     const newCameraPermission = await Camera.requestCameraPermission();
//     console.log(newCameraPermission);
//   };

//   const permissions = permission => {
//     request(permission).then(result => {
//       console.log(result);
//     });
//   };

//   let options = {
//     saveToPhotos: true,
//     mediaType: 'photo',
//   };

//   const openCameraOnAndroid = async () => {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       const result = await launchCamera(options);
//       setCameraPhoto(result.assets[0].uri);
//     }
//   };

//   const openGellary = async () => {
//     const result = await launchImageLibrary(options);
//     setTapedPhoto(result.assets[0].uri);
//   };

//   const takePhoto = async () => {
//     const photo = await camera.current.takePhoto();
//     console.log(photo.path);
//   };

//   if (device == null) return <ActivityIndicator />;
//   return (
//     <View style={{flex: 1}}>
//       <Camera
//         ref={camera}
//         style={StyleSheet.absoluteFill}
//         device={device}
//         isActive={true}
//         photo={true}
//       />
//       <TouchableOpacity
//         style={{flex: 1, justifyContent: 'flex-end'}}
//         onPress={() => takePhoto()}>
//         <View
//           style={{
//             height: 50,
//             width: 50,
//             borderRadius: 50,
//             backgroundColor: 'red',
//             margin: 15,
//             alignSelf: 'center',
//           }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           if (Platform.OS == 'ios') {
//             permissions(PERMISSIONS.IOS.CAMERA);
//           } else {
//             openCameraOnAndroid();
//           }
//         }}>
//         <Text style={styles.buttonText}>Camera</Text>
//       </TouchableOpacity>
//       <Image source={{uri: cameraPhoto}} style={styles.image} />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           if (Platform.OS == 'ios') {
//             permissions(PERMISSIONS.IOS.MICROPHONE);
//           } else {
//             permissions(PERMISSIONS.ANDROID.RECORD_AUDIO);
//           }
//         }}>
//         <Text style={styles.buttonText}>Microphone</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           if (Platform.OS == 'ios') {
//             permissions(PERMISSIONS.IOS.PHOTO_LIBRARY);
//           } else {
//             // permissions(PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION);
//             openGellary();
//           }
//         }}>
//         <Text style={styles.buttonText}>Gallery</Text>
//       </TouchableOpacity>
//       <Image style={styles.image} source={{uri: tapedPhoto}} />
//     </View>
//   );
// };

// export default VerticalThreeButton;
