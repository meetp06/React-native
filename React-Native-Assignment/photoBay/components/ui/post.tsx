import {useContext, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import PostBody from './postBody';
import PostFooter from './postFooter';
import PostHeader from './postHeader';
import DimensionConstant from '../../contexts';

//* Individual Post component

const Post = ({userImg, postImg, name, location}: any) => {
  const {verticalScale, horizontalScale, moderateScale} = useContext(
    DimensionConstant,
  ) as any;

  //* Varibles and functions to change onLiked and onSaved
  const [isLiked, setIsLiked] = useState(false);
  const [notSaved, setNotSaved] = useState(true);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleSave = () => {
    setNotSaved(!notSaved);

    if (notSaved) {
      Alert.alert('Post Saved');
    }
  };

  return (
    <View
      style={[
        styles.root,
        {marginBottom: verticalScale(10), paddingTop: verticalScale(10)},
      ]}>
      <PostHeader image={userImg} name={name} location={location} />
      <PostBody bodyImg={postImg} onToggle={toggleLike} />
      <PostFooter
        isLiked={isLiked}
        onToggle={toggleLike}
        isSaved={notSaved}
        onSave={toggleSave}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 30,
    paddingTop: 10,
  },
});

export default Post;
