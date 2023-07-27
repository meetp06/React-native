import {StyleSheet, View} from 'react-native';
import HomeContainer from './containers/HomeContainer';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <HomeContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MyComponent;
