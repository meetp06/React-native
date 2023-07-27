import { FlatList } from 'react-native-gesture-handler';
import { Data } from '../../assets';
import { applicationStyles } from '../../theme';
import { RenderItem } from './render-item';

const HomeScreen = () => {
  return (
    <FlatList
      style={applicationStyles.screenWhite}
      data={Data}
      renderItem={({ item, index }) => (
        <RenderItem
          item={item}
          index={index}
        />
      )}
      keyExtractor={(item) => item.title}
    />
  );
};

export default HomeScreen;
