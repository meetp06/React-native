/*
 * Loading Screen component.
 *
 * @params size - size of the loader.
 * @params textInfo - that we want to show in Loading.
 * @return loading screen with the message.
 */

import { View, ActivityIndicator, Platform, Text } from 'react-native';
import loadingScreen from './LoadingScreenStyle';

const LoadingScreen = ({ size = 'large', textInfo }) => {
    const color = Platform.OS === 'ios' ? '#8D9EFF' : '#3B185F';

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

export default LoadingScreen;
