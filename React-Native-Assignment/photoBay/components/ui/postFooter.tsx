import {useContext} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import DimensionConstant from '../../contexts';

//* Post footer consisting of like share comment and save tags
const PostFooter = ({isLiked, onToggle, isSaved, onSave}: any) => {
  const {verticalScale, horizontalScale, moderateScale} = useContext(
    DimensionConstant,
  ) as any;

  return (
    // * Main view holding all
    <View
      style={[
        styles.root,
        {
          paddingTop: verticalScale(15),
          paddingLeft: horizontalScale(15),
          paddingRight: horizontalScale(15),
        },
      ]}>
      {/*// * Holding like share and comment} */}
      <View style={styles.likePart}>
        <Pressable onPress={onToggle}>
          <Image
            style={styles.img}
            source={
              isLiked
                ? require('../../assets/icons/heartFilled.png')
                : require('../../assets/icons/heart.png')
            }
          />
        </Pressable>

        <Image
          style={styles.img}
          source={require('../../assets/icons/chat.png')}
        />
        <Image
          style={styles.img}
          source={require('../../assets/icons/send.png')}
        />
      </View>

      {/*// * Holding save} */}
      <View>
        <Pressable onPress={onSave}>
          <Image
            style={[styles.img, {marginRight: 0}]}
            source={
              isSaved
                ? require('../../assets/icons/unSaved.png')
                : require('../../assets/icons/saved.png')
            }
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  likePart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  img: {
    height: 24,
    width: 24,
    marginRight: 14,
  },
});

export default PostFooter;
