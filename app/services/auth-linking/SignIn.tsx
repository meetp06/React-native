import { useCallback } from 'react';
import { Image, Linking, TouchableOpacity } from 'react-native';
import Color from '../../theme/Colors';
import styles from './SignInStyles';

type OpenURLButton = {
  url: string;
  children: number;
};

const OpenUrl = ({ url, children }: OpenURLButton) => {
  const handlePress = useCallback(async () => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) await Linking.openURL(url);
  }, [url]);
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.socialButton, { backgroundColor: Color.White }]}>
      <Image source={children} style={styles.iconStyle} />
    </TouchableOpacity>
  );
};

export default OpenUrl;
