import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ROUTES } from '../../../constants';
import { navigateWithPush } from '../../../utils';
import styles from './RenderItemStyles';
import { useContext } from 'react';
import { VideoContext } from '../../../contexts';

const RenderItem = ({ item, index }) => {
  const { currentVideo, setCurrentVideo } = useContext(VideoContext) as any;
  const openVideo = () => {
    setCurrentVideo(index);
    navigateWithPush(ROUTES.VIDEO_SCREEN);
  };

  return (
    <TouchableOpacity
      style={styles.videoContainer}
      onPress={openVideo}>
      <Image
        source={{ uri: item.thumb }}
        style={styles.thumbnail}
      />
      <View style={styles.videoInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;
