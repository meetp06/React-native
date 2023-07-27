import { memo } from 'react';
import { ActivityIndicator, Image, Platform, Text, View } from 'react-native';
import { Images } from '../../assets';
import { COLORS } from '../../theme';
import loadingScreen from './LoadingIndicatorStyles';

/*
 * Loading Screen component.
 *
 * @param {textInfo} - that we want to show in Loading.
 * @return loading screen with the message.
 */

const LoadingScreen = ({ textInfo }) => {
  const isAndroid = Platform.OS === 'android';
  const color = COLORS.PrimaryColor;

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
            size={'large'}
            color={color}
          />
        )}
        {textInfo && (
          <Text style={loadingScreen.indicatorText}>{textInfo}</Text>
        )}
      </View>
    </View>
  );
};

export default memo(LoadingScreen);
