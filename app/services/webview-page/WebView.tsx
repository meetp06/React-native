import { View } from 'react-native';
import WebView from 'react-native-webview';
import styles from './WebViewStyles';

const WebViewComponent = () => {
  const googleUrl = 'https://google.com';
  return (
    <View style={styles.root}>
      <WebView
        source={{ uri: googleUrl }}
        onLoad={() => console.log('Loaded!!')}
      />
    </View>
  );
};

export default WebViewComponent;
