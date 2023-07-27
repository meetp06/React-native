import { Platform } from 'react-native';
import * as Permissions from 'react-native-permissions';

const requestPermission = async (permissionType) => {
  try {
    let status;
    if (Platform.OS === 'android') {
      const androidPermission = Permissions.PERMISSIONS.ANDROID[permissionType];
      status = await Permissions.request(androidPermission);
    } else if (Platform.OS === 'ios') {
      const iosPermission = Permissions.PERMISSIONS.IOS[permissionType];
      status = await Permissions.request(iosPermission);
    }

    switch (status) {
      case Permissions.RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)'
        );
        break;
      case Permissions.RESULTS.DENIED:
        console.log(
          'The permission has not been requested / is denied but requestable'
        );
        break;
      case Permissions.RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');
        break;
      case Permissions.RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case Permissions.RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        Permissions.openSettings();
        break;
    }
  } catch (error) {
    console.log('Permission request error:', error);
  }
};

export default requestPermission;
