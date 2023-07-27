import { useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';

const withScaleDownOnPress = (WrappedComponent: any) => {
    return (props: any) => {
        const [scaleValue] = useState(new Animated.Value(1));

        const onPressIn = () => {
            Animated.timing(scaleValue, {
                toValue: 0.9,
                duration: 150,
                useNativeDriver: true,
            }).start();
        };

        const onPressOut = () => {
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }).start();
        };

        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPressIn={onPressIn}
                onPressOut={onPressOut}>
                <Animated.View
                    style={{
                        transform: [{ scale: scaleValue }],
                    }}>
                    <WrappedComponent {...props} />
                </Animated.View>
            </TouchableOpacity>
        );
    };
};

export default withScaleDownOnPress;
