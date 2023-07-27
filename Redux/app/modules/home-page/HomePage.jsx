import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// create a component
const HomePage = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Home Page</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=500',
          }}
        />
        <Text>Iphone</Text>
        <Button title="add into cart" onPress={() => {}} />
        {/* <CartPage data={{name: 'Meet'}} /> */}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 200,
    width: 200,
  },
});

//make this component available to the app
export default HomePage;
