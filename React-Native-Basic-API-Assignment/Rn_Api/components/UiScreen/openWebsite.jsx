import React, { useCallback } from 'react';
import { Button, Image, Linking, SafeAreaView, View } from 'react-native';
import styles from './openWebsiteStyle';

const reactNativeLink = 'https://reactnative.dev/';

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        await Linking.openURL(url);
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
};

const OpenWebsite = () => {
    return (
        <>
            <SafeAreaView >
                <View style={styles.container}>
                    <View>
                        <Image source={require('../../assets/image/reactImage.png')} style={styles.image} />
                    </View>
                    <View>
                        <OpenURLButton url={reactNativeLink}>Open ReactNative WebApp</OpenURLButton>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

export default OpenWebsite;