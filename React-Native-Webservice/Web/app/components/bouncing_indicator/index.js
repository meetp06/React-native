import { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';

const BouncyLoadingIndicator = ({ size = 50, color = 'purple' }) => {
    const [animation] = useState(new Animated.Value(0));
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        startAnimation();
        return () => clearInterval(intervalId);
    }, []);

    const startAnimation = () => {
        const id = setInterval(() => {
            Animated.sequence([
                Animated.timing(animation, {
                    toValue: 1.2,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        }, 600);

        setIntervalId(id);
    };

    const sizeStyle = { width: size, height: size };
    const borderRadiusStyle = { borderRadius: size / 2 };
    const animatedStyle = {
        transform: [{ scale: animation }],
    };

    return (
        <View style={[sizeStyle, borderRadiusStyle]}>
            <Animated.View
                style={[
                    sizeStyle,
                    borderRadiusStyle,
                    { backgroundColor: color },
                    animatedStyle,
                ]}
            />
        </View>
    );
};

export default BouncyLoadingIndicator;
