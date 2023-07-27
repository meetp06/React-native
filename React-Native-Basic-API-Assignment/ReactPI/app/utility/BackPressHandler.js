/*
 * Function to handle the Backpress
 *
 * @params none.
 * @return true.
 */

import { Alert, BackHandler } from 'react-native';

const backPressHandler = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
        },

        {
            text: 'YES',
            onPress: () => BackHandler.exitApp(),
        },
    ]);

    return true;
};

export default backPressHandler;
