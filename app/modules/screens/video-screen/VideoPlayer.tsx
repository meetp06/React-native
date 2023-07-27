import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { RouteNames } from '../../../constants';
import { VideoData } from '../../../services';
import { navigateWithPush } from '../../../utils';
import styles from './VideoPlayerStyle';

const VideoPlayer = () => {
  const navigatToVideo = ({ title, thumb, description, sources }: any) => {
    navigateWithPush(RouteNames.VideoPlayer, {
      title,
      thumb,
      description,
      sources,
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          justifyContent: 'flex-start',
          backgroundColor: '#243447',
        }}
        style={styles.flatlist}
        data={VideoData}
        renderItem={({ item }) => {
          return (
            <View style={styles.rootView}>
              <TouchableOpacity onPress={() => navigatToVideo(item)}>
                <View style={styles.videoView}>
                  <Image
                    source={{ uri: item.thumb.replace('http', 'https') }}
                    resizeMode="contain"
                    style={styles.image}
                  />
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default VideoPlayer;
