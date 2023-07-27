import notifee, {
  AndroidImportance,
  AndroidStyle,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './NotificationPageStyle';

const NotificationPage = () => {
  const PushNotification = async () => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      sound: 'default',
      importance: AndroidImportance.HIGH,
    });

    const date = new Date(Date.now());
    date.setHours(11);
    date.setMinutes(10);

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
    };

    // Display a notification
    await notifee.displayNotification({
      title: 'You reached 10M subscriber',
      body: 'Mustang GT 1969',
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        sound: 'default',
        color: 'red',
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture: 'https://rb.gy/cmjft',
        },
      },
      ios: {
        sound: 'default',
        badgeCount: 2,
      },
    });
  };
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => PushNotification()}>
        <Text>No notifications...</Text>
      </TouchableOpacity>
    </View>
  );
};
export default NotificationPage;
