import {useNavigation} from '@react-navigation/native';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import MediaData from '../../constants/media';
import styles from './VideoHomeStyles';

// create a component
const VideoHomePage = () => {
  const navigation = useNavigation();
  const navigatToVideo = ({title, thumb, description, sources}) => {
    navigation.navigate('VideoPage', {title, thumb, description, sources});
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Google Video Player</Text>
      </View>
      <View>
        <FlatList
          contentContainerStyle={{
            justifyContent: 'flex-start',
          }}
          style={styles.flatlist}
          data={MediaData}
          renderItem={({item}) => {
            return (
              <View style={styles.rootView}>
                <TouchableOpacity onPress={() => navigatToVideo(item)}>
                  <Text>{item.title}</Text>
                  <Image
                    source={{uri: item.thumb.replace('http', 'https')}}
                    resizeMode="contain"
                    style={{height: 100, width: 100}}
                  />
                  <Text numberOfLines={4}>{item.description}</Text>
                </TouchableOpacity>
                <View style={styles.line} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default VideoHomePage;
