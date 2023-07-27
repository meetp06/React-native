import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  videoPlayer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  sound: {
    marginRight: 5,
    position: 'absolute',
    top: 10,
    right: 0,
  },
  controls: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
  },
  controlButton: {
    marginHorizontal: 10,
  },
  progressContainer: {
    flexDirection: 'row',
  },
  mainControlRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryControls: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hideFullScreenMode: {
    position: 'absolute',
    top: 10,
    left: 0,
  },
});

export default styles;
