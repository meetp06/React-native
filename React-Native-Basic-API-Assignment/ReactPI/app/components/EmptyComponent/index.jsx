/*
 * Generic component to show the message.
 *
 * @params message that we want to let the user see.
 * @return container having an image and message at the bottom.
 */

import { Image, Text, View } from 'react-native';
import { EmptyImage } from '../../constants/ImagesLocation';
import emptyComponentStyle from './EmptyComponentStyle';

const EmptyComponent = ({ message }) => {
    return (
        <View style={emptyComponentStyle.mainView}>
            <View style={emptyComponentStyle.box}>
                <Image
                    source={EmptyImage}
                    resizeMode={'contain'}
                    style={emptyComponentStyle.iconStyle}
                />
                <Text style={emptyComponentStyle.textStyle}>{message}</Text>
            </View>
        </View>
    );
};

export default EmptyComponent;
