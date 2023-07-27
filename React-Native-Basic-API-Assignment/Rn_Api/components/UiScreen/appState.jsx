import React, { useRef, useState, useEffect } from 'react';
import { AppState, Text, View } from 'react-native';
import styles from './appStateStyle';

const AppStateExample = () => {
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                setCount((count) => count + 1)
            }
            appState.current = nextAppState;
            setAppStateVisible(appState.current);
        });

        return () => {
            subscription.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{count}</Text>
        </View>
    );
};

export default AppStateExample;