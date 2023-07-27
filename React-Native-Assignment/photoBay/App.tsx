import {
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import AppBody from './components/ui/appBody';
import AppHeader from './components/ui/appHeader';
import {useCallback} from 'react';
import DimensionConstant from './contexts';

//* Our main App component

const App = () => {
  const {height, width} = useWindowDimensions();

  const guidelineBaseWidth = 375;
  const guidelineBaseHeight = 812;

  const horizontalScale = useCallback(
    (size: number) => (width / guidelineBaseWidth) * size,
    [height, width],
  );

  const verticalScale = useCallback(
    (size: number) => (height / guidelineBaseHeight) * size,
    [height, width],
  );

  const moderateScale = useCallback(
    (size: number, factor = 0.5) =>
      size + (horizontalScale(size) - size) * factor,
    [height, width],
  );

  return (
    <DimensionConstant.Provider
      value={{horizontalScale, moderateScale, verticalScale} as any}>
      <View style={style.mainView}>
        <SafeAreaView style={{flex: 1}}>
          {/* //* App Header */}
          <AppHeader />

          {/* //* AppBody */}
          <AppBody />
        </SafeAreaView>
      </View>
    </DimensionConstant.Provider>
  );
};

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
