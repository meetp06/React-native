import { memo } from 'react';
import { Image, View } from 'react-native';
import circularImageStyle from './CircularImageStyle';

/*
 * Circular Image container.
 *
 * @param {src} - img location of the image.
 * @param {styleForImage} - style for our image
 * @return - a circular image having contain mode.
 */

const CircularImage = ({ src, styleForImage }) => {
    return (
        <View style={circularImageStyle.root}>
            <View style={[circularImageStyle.imageContainer, styleForImage]}>
                <Image
                    style={[circularImageStyle.image, styleForImage]}
                    source={src}
                    resizeMode={'contain'}
                />
            </View>
        </View>
    );
};

export default memo(CircularImage);
