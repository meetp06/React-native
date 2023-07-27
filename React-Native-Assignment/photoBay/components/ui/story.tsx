import {useContext, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import CircularImage from './circularImage';
import OverlayImage from './overlayStory';
import DimensionConstant from '../../contexts';

//* Individual Story
const Story = ({src, name}: any) => {
  const {verticalScale, horizontalScale, moderateScale} = useContext(
    DimensionConstant,
  ) as any;

  const [isVisible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!isVisible);
  };

  return (
    <View style={styles.root}>
      {/* //* Our story */}
      <Pressable onPress={toggleModal}>
        <CircularImage src={src} />
      </Pressable>

      {/* //* Overlay which is Modal */}
      {isVisible && <OverlayImage src={src} onHide={toggleModal} />}

      {/* //* User Name */}
      <Text style={[styles.name, {fontSize: moderateScale(16)}]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  name: {
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
  },
});

export default Story;
