import {View} from 'react-native';
import MapView from 'react-native-maps';
import styles from './MapStyles';

// create a component
const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

//make this component available to the app
export default Map;
