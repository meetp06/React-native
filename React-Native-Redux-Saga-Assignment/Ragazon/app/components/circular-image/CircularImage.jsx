import { memo } from 'react';
import { Image, View } from 'react-native';
import { Images } from '../../assets';
import circularImageStyle from './CircularImageStyle';

/*
 * Circular Image container.
 *
 * @param {src} - img uri.
 * @param {styleForImage} - style for our image
 * @return - a circular image having contain mode.
 */

const CircularImage = ({ src, styleForImage }) => {
  return (
    <View style={circularImageStyle.root}>
      <View style={[circularImageStyle.imageContainer, styleForImage]}>
        <Image
          style={[circularImageStyle.image, styleForImage]}
          source={src ? { uri: src } : { uri: Images.defaultImage }}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

export default memo(CircularImage);
