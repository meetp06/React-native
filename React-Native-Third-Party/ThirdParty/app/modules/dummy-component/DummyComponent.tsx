import { Text, View } from 'react-native';
import { applicationStyles } from '../../theme';

const DummyComponent = () => {
  return (
    <View style={applicationStyles.screen}>
      <Text>From the notification</Text>
    </View>
  );
};

export default DummyComponent;
