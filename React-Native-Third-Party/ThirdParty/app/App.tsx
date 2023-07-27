import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { VideoContext } from './contexts';
import { useVideoContext } from './hooks';
import { HomeStack } from './navigation';
import { applicationStyles } from './theme';
import { navigationRef } from './utils';
import { HomeScreenWithVision } from './modules';

const App = () => {
  return (
    <SafeAreaView style={applicationStyles.screen}>
      <HomeScreenWithVision />
    </SafeAreaView>
  );

  const [currentVideo, setCurrentVideo] = useVideoContext();

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={applicationStyles.screen}>
        <VideoContext.Provider value={{ currentVideo, setCurrentVideo }}>
          <HomeStack />
        </VideoContext.Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
