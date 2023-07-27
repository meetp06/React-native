import {StyleSheet, Text, View} from 'react-native';

// create a component
const SearchProduct = () => {
  return (
    <View style={styles.container}>
      <Text>SearchProduct</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default SearchProduct;
