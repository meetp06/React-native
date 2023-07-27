import { memo } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import loadingScreen from './LoadingIndicatorStyles';
import { COLORS } from '../../theme';

/*
 * Loading Screen component.
 *
 * @param {size} - size of the loader.
 * @param {textInfo} - that we want to show in Loading.
 * @return loading screen with the message.
 */

const LoadingScreen = ({ size = 'large', textInfo }) => {
    const color = COLORS.PrimaryColor;

    return (
        <View style={loadingScreen.loaderStyle}>
            <View style={loadingScreen.loaderBox}>
                <ActivityIndicator
                    size={size}
                    color={color}
                />
                <Text style={loadingScreen.indicatorText}>{textInfo}</Text>
            </View>
        </View>
    );
};

export default memo(LoadingScreen);
