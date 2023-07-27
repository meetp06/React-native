import {StyleSheet} from 'react-native';

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    height: 300,
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    margin: 15,
  },
  desc: {
    alignSelf: 'center',
    margin: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
  },
  fullscreenVideo: {
    width: '90%',
    height: 400,
  },
  controls: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
  },
});
export default styles;
