import { memo } from 'react';
import { ActivityIndicator, Image, Platform, Text, View } from 'react-native';
import { COLORS } from '../../theme';
import loadingScreen from './LoadingIndicatorStyles';
import { Images } from '../../assets';

/*
 * Loading Screen component.
 *
 * @param {size} - size of the loader.
 * @param {textInfo} - that we want to show in Loading.
 * @return loading screen with the message.
 */

const LoadingScreen = ({ size = 'large', textInfo }) => {
  const color = COLORS.PrimaryColor;
  const isAndroid = Platform.OS === 'android';

  return (
    <View style={loadingScreen.loaderStyle}>
      <View style={loadingScreen.loaderBox}>
        {!isAndroid ? (
          <Image
            source={Images.loaderImage}
            style={loadingScreen.loaderImage}
          />
        ) : (
          <ActivityIndicator
            size={size}
            color={color}
          />
        )}
        {textInfo ? (
          <Text style={loadingScreen.indicatorText}>{textInfo}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default memo(LoadingScreen);
