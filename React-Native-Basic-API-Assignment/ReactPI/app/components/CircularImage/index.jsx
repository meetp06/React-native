/*
 * Circular Image container.
 *
 * @params src img location of the image.
 * @params styleForImage
 * @return a circular image having cover mode.
 */

import { memo } from 'react';
import { Image, View } from 'react-native';
import circularImageStyle from './CircularImageStyle';

const CircularImage = ({ src, styleForImage }) => {
    return (
        <View style={circularImageStyle.root}>
            <View style={[circularImageStyle.imageContainer, styleForImage]}>
                <Image
                    style={[circularImageStyle.image, styleForImage]}
                    source={src}
                    resizeMode={'cover'}
                />
            </View>
        </View>
    );
};

export default memo(CircularImage);
