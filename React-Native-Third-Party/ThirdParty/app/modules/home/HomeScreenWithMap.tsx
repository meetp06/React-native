import { useState } from 'react';
import { View } from 'react-native';
import MapView, {
  Circle,
  Heatmap,
  Marker,
  PROVIDER_GOOGLE,
  Polygon,
  Polyline,
} from 'react-native-maps';
import { COLORS } from '../../theme';
import requestPermission from '../../utils/permissionHandler';
import styles from './HomeScreenStyles';

const HomeScreen = () => {
  const askPermission = () => {
    requestPermission('CAMERA');
  };

  const [currentRegion, setCurrentRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const onRegionChange = (newRegion) => {
    setCurrentRegion(newRegion);
  };

  const [cameraPosition, setCameraPosition] = useState({
    center: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    pitch: 100,
    heading: -12,
    zoom: 20,
  });

  const handleCameraChange = (newCamera) => {
    setCameraPosition(newCamera);
  };

  const [markerCoordinate, setMarkerCoordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const handleMarkerDragEnd = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarkerCoordinate({ latitude, longitude });
  };

  const [polygonCoordinates, setPolygonCoordinates] = useState([
    { latitude: 37.78825, longitude: -122.4324 },
    { latitude: 37.7896386, longitude: -122.421646 },
    { latitude: 37.785032, longitude: -122.418476 },
    { latitude: 37.783032, longitude: -122.425476 },
  ]);

  const [polylineCoordinates, setPolylineCoordinates] = useState([
    { latitude: 37.8025259, longitude: -122.4351431 },
    { latitude: 37.7896386, longitude: -122.421646 },
    { latitude: 37.7665248, longitude: -122.4161628 },
    { latitude: 37.7734153, longitude: -122.4577787 },
    { latitude: 37.7948605, longitude: -122.4596065 },
    { latitude: 37.8025259, longitude: -122.4351431 },
  ]);

  const [overlayCoordinates, setOverlayCoordinates] = useState([
    { latitude: 37.78825, longitude: -122.4324 },
    { latitude: 37.783032, longitude: -122.425476 },
  ]);

  const [heatmapPoints, setHeatmapPoints] = useState([
    { latitude: 37.78825, longitude: -122.4324, weight: 0.5 },
    { latitude: 37.7896386, longitude: -122.421646, weight: 0.3 },
    { latitude: 37.785032, longitude: -122.418476, weight: 0.8 },
    // Add more heatmap points as needed
  ]);

  return (
    <View style={styles.root}>
      <MapView
        provider={PROVIDER_GOOGLE}
        region={currentRegion}
        showsUserLocation={true}
        mapType='standard'
        style={styles.mapStyle}
        showsBuildings
        loadingEnabled
        loadingIndicatorColor={COLORS.red}
        initialRegion={currentRegion}
        showsCompass={true}
        onRegionChangeComplete={onRegionChange}
        tintColor={COLORS.red}>
        <Marker
          coordinate={markerCoordinate}
          title='Show Pin'
          description='Your location'
          pinColor='red'
          rotation={0}
          draggable
          onDragEnd={handleMarkerDragEnd}
          // children={
          //   <View style={{ backgroundColor: 'red', padding: 10 }}>
          //     <Text>SF</Text>
          //   </View>
          // }
        />
        <Polygon
          coordinates={polygonCoordinates}
          fillColor={COLORS.PrimaryColor}
          strokeColor='red'
          strokeWidth={2}
        />
        <Polyline
          coordinates={polylineCoordinates}
          fillColor={COLORS.PrimaryColor}
          strokeColor='red'
          strokeWidth={6}
          strokeColors={[
            '#7F0000',
            '#00000000',
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000',
          ]}
        />
        <Circle
          center={markerCoordinate}
          radius={1000}
          strokeWidth={6}
          strokeColor={COLORS.TriadicColor}
        />
        {/* <Overlay
          bounds={overlayCoordinates}
          image={{ uri: Images.overlayImage }}
        /> */}
        <Heatmap
          points={heatmapPoints}
          opacity={1}
          radius={10}
        />
      </MapView>
    </View>
  );
};

export default HomeScreen;
