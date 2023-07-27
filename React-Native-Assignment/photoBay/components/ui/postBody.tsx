import {useContext, useState} from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';
import {StyleSheet, View} from 'react-native';
import DimensionConstant from '../../contexts';

//* Main post body consisting of image with vertical dot
const PostBody = ({bodyImg, onToggle}: any) => {
  const {verticalScale, horizontalScale, moderateScale} = useContext(
    DimensionConstant,
  ) as any;

  //* Double tap logic
  const [lastTap, setLastTap] = useState(Date.now());

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      onToggle();
    } else {
      setLastTap(now);
    }
  };

  return (
    // * Main view holding all
    <View>
      {/* //* Three dots */}
      <View style={[styles.editIcon]}>
        <Image
          resizeMode="contain"
          style={styles.editImg}
          source={require('../../assets/icons/dot.png')}
        />
      </View>

      {/* //* Image */}

      <TouchableWithoutFeedback onPress={handleDoubleTap}>
        <Image
          source={bodyImg}
          style={styles.responsiveImage}
          resizeMode={'contain'}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  responsiveImage: {
    width: '100%',
    height: 'auto',
    aspectRatio: 16 / 9,
  },

  editIcon: {
    paddingTop: 5,
    position: 'absolute',
    alignSelf: 'flex-end',
    zIndex: 1,
    width: 45,
    height: 45,
  },

  editImg: {
    width: '100%',
    height: 'auto',
    aspectRatio: 14 / 9,
  },
});

export default PostBody;
