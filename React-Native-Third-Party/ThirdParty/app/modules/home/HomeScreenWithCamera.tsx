import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useIsAppForeground } from '../../hooks';

const HomeScreenWithCamera = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const isActive = useIsAppForeground();

  const takePermissions = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();
  };

  useEffect(() => {
    takePermissions();
  }, []);

  if (device == null) return <View />;
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={isActive}
      photo={true}
    />
  );
};

export default HomeScreenWithCamera;
