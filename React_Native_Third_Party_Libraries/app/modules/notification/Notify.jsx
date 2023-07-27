import notifee from '@notifee/react-native';
import {Button, View} from 'react-native';

const Screen = () => {
  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DELIVERED:
          console.log('User dilivered notification', detail.notification);
          break;
      }
    });
  }, []);

  const onDisplayNotification = async () => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Instagram',
      body: 'xx@_hj Follow you',
      ios: {
        badgeCount: 5,
        sound: 'default',
      },
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  return (
    <View style={{marginTop: 100}}>
      <Button
        title="App Notification"
        onPress={() => onDisplayNotification()}
      />
    </View>
  );
};

export default Screen;
