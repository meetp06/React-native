import { memo } from 'react';
import { Image, Text, View } from 'react-native';
import emptyComponentStyle from './EmptyComponentStyles';

/*
 * Generic component to show the message.
 *
 * @param {message} - message we want to let the user see.
 * @param {src} - it is the path of the image to show.
 * @return container having an image and message at the bottom.
 */

const EmptyComponent = ({ message, src }) => {
  return (
    <View style={emptyComponentStyle.mainView}>
      <View style={emptyComponentStyle.box}>
        <Image
          source={src}
          resizeMode={'contain'}
          style={emptyComponentStyle.iconStyle}
        />
        {message && (
          <Text style={emptyComponentStyle.textStyle}>{message}</Text>
        )}
      </View>
    </View>
  );
};

export default memo(EmptyComponent);
