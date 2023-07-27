/**
 * @format
 */

import notifee, {EventType} from '@notifee/react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {AppRegistry} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {name as appName} from './app.json';
import App from './app/App.jsx';

console.log(notifee.onBackgroundEvent, 'not');
notifee.onBackgroundEvent(({type, detail}) => {
  console.log(notifee.onBackgroundEvent, 'nothyr');
  switch (type) {
    case EventType.DISMISSED:
      console.log('Background User dismissed notification');
      break;
    case EventType.PRESS:
      console.log('Background User pressed notification');
      break;
    case EventType.ACTION_PRESS:
      console.log('Background User performed an action on the notification');
      break;
    case EventType.APP_BLOCKED:
      console.log('Background Notification blocked');
      break;
    case EventType.DELIVERED:
      console.log('Background Notification delivered');
      break;
    case EventType.UNKNOWN:
      console.log('Background Unknown event type:', type);
      break;
  }
});

PushNotification.createChannel(
  {
    channelId: 'channel-id', // Unique ID for the channel
    channelName: 'Channel Name', // Name of the channel
    channelDescription: 'Channel Description', // Description of the channel
    importance: 4, // Importance level (integer between 1 and 5)
    vibrate: true, // Whether to enable vibration
  },
  created => console.log(`Channel ${created ? 'created' : 'existing'}`), // Callback to handle channel creation
);

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    // process the notification
    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);
    // process the action
  },
  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },
  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

AppRegistry.registerComponent(appName, () => App);
