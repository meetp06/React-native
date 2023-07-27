/*
 * App Footer component which is showing the link at the bottom of the screen.
 *
 * @params none.
 * @return app footer container.
 */

import { memo } from 'react';
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import { linkImage } from '../../../constants/ImagesLocation';
import Strings from '../../../constants/Strings';
import CircularImage from '../../CircularImage';
import mainAppFooterStyle from './MainAppFooterStyle';

const MainAppFooter = () => {
    const openURL = async () => {
        try {
            await Linking.openURL(Strings.footerURL);
        } catch (error) {
            Alert.alert(Strings.errorTitle, error.toString());
        }
    };

    return (
        <View style={mainAppFooterStyle.mainView}>
            <CircularImage src={linkImage} />
            <TouchableOpacity onPress={openURL}>
                <Text style={mainAppFooterStyle.iconText}> Link - QsR11 </Text>
            </TouchableOpacity>
        </View>
    );
};

export default memo(MainAppFooter);
