import notifee, {
  AndroidImportance,
  AndroidLaunchActivityFlag,
  EventType,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import { useEffect } from 'react';
import { View } from 'react-native';
import { Images } from '../../assets';
import { CustomButton } from '../../components';
import { COLORS, applicationStyles } from '../../theme';

const HomeScreenWithNotifee = () => {
  //* increment the badges
  const incrementBadges = async () => {
    await notifee.incrementBadgeCount();
  };
  //* decrement the badges
  const decrementBadges = async () => {
    await notifee.decrementBadgeCount();
  };

  //* show the notification
  const onDisplayNotification = async () => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    const notificationId = Math.floor(Math.random() * 10000).toString();

    // Display a notification
    await notifee.displayNotification({
      title: 'From Notifee',
      id: notificationId,
      body: 'You got a notification',
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
        color: COLORS.PrimaryColor,
        sound: 'default',
        pressAction: {
          id: 'default',
          launchActivity: 'com.thirdparty.CustomActivity',
          launchActivityFlags: [AndroidLaunchActivityFlag.NEW_TASK],
        },
        // style: {
        //   type: AndroidStyle.BIGPICTURE,
        // picture: Images.overlayImage,
        // },
        // style: {
        //   type: AndroidStyle.MESSAGING,
        //   person: {
        //     name: 'John Doe',
        //     icon: 'https://my-cdn.com/avatars/123.png',
        //   },
        //   messages: [
        //     {
        //       text: 'Hey, how are you?',
        //       timestamp: Date.now() - 600000, // 10 minutes ago
        //     },
        //     {
        //       text: 'Great thanks, food later?',
        //       timestamp: Date.now(), // Now
        //       person: {
        //         name: 'Sarah Lane',
        //         icon: 'https://my-cdn.com/avatars/567.png',
        //       },
        //     },
        //   ],
        // },
      },
      ios: {
        categoryId: 'message',
        sound: 'default',
        attachments: [
          {
            // iOS resource
            url: Images.overlayImage,
            thumbnailHidden: false,
          },
        ],
      },
    });

    // setTimeout(async () => {
    //   await notifee.displayNotification({
    //     id: notificationId,
    //     title: 'From Notifee',
    //     body: 'You got a altered notification',
    //     android: {
    //       channelId,
    //       //   smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
    //       // pressAction is needed if you want the notification to open the app when pressed
    //       pressAction: {
    //         id: 'default',
    //       },
    //     },
    //     ios: {
    //       badgeCount: 1,
    //     },
    //   });
    // }, 5000);

    ///* Cancel the notification
    // setTimeout(async () => {
    //   await notifee.cancelAllNotifications();
    // }, 7000);
  };

  //*
  useEffect(() => {
    const unsubscribe = notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification');
          break;
        case EventType.PRESS: {
          decrementBadges();
          console.log('User pressed notification');
          break;
        }
        case EventType.ACTION_PRESS:
          console.log('User performed an action on the notification');
          break;
        case EventType.APP_BLOCKED:
          console.log('Notification blocked');
          break;
        case EventType.DELIVERED: {
          incrementBadges();
          console.log('Notification delivered');
          break;
        }
        case EventType.UNKNOWN:
          console.log('Unknown event type:', type);
          break;
      }
    });

    return () => unsubscribe();
  }, []);

  //* function which checks for the notification
  const checkForNotification = async () => {
    await notifee.setNotificationCategories([
      {
        id: 'message',
        actions: [
          {
            id: 'mark-as-read',
            title: 'Mark as read',
          },
        ],
      },
    ]);
    const initialNotification = await notifee.getInitialNotification();

    if (initialNotification) {
      console.log(
        'Notification caused application to open',
        `'${initialNotification.notification.title}'`
      );
    }
  };

  //* which notification made the app to open
  useEffect(() => {
    checkForNotification();
  }, []);

  //* code to create a trigger
  const onCreateTriggerNotification = async () => {
    const date = new Date(Date.now());
    date.setHours(17);
    date.setMinutes(6);

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        id: '123456',
        title: 'Meeting with QsR11',
        body: 'Today at ' + `${date.getHours()}:${date.getMinutes()}`,
        android: {
          channelId: 'your-channel-id',
        },
      },
      trigger
    );

    const allIds = await notifee.getTriggerNotifications();
  };

  return (
    <View style={applicationStyles.screen}>
      <CustomButton
        title={'Press it to get Notification'}
        onPress={onDisplayNotification}
      />
      <CustomButton
        title={'Press it to schedule a triggered Notification'}
        onPress={onCreateTriggerNotification}
      />
    </View>
  );
};

export default HomeScreenWithNotifee;
