import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../theme';
import Color from '../../../theme/Colors';

const styles = StyleSheet.create({
  flatlist: {
    flex: 1
  },
  rootView: {
    margin: moderateScale(10),
    flex: 1
  },
  container: {
    flex: 1
  },
  image: {
    width: '90%',
    flex: 1,
    borderRadius: moderateScale(60),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 18
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24
  },
  videoView: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: verticalScale(300),
    borderRadius: moderateScale(50)
  },
  titleText: {
    fontSize: moderateScale(20),
    color: Color.White,
    position: 'absolute',
    top: verticalScale(300),
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'Cousine-Regular'
  },
  video: {
    height: verticalScale(300),
    width: '90%',
    alignSelf: 'center'
  },
  text: {
    alignSelf: 'center',
    margin: moderateScale(15),
    fontSize: moderateScale(18),
    fontWeight: '600',
    fontFamily: 'Cousine-Regular'
  },
  desc: {
    alignSelf: 'center',
    margin: moderateScale(20),
    fontSize: moderateScale(15),
    color: Color.BackgroundColor,
    fontFamily: 'Cousine-Regular'
  },
  VideoControllercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullscreenVideo: {
    width: '90%',
    height: verticalScale(400),
    borderRadius: moderateScale(10),
    backgroundColor: Color.Black
  },
  controls: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  scrollView: {
    justifyContent: 'center'
  },
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    margin: moderateScale(12),
    position: 'absolute',
    top: verticalScale(400)
  },
  playPause: {
    marginTop: verticalScale(4)
  },
  volume: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    margin: moderateScale(15)
  },
  timeDurationText: {
    fontWeight: '500',
    fontSize: moderateScale(17),
    margin: moderateScale(8),
    fontFamily: 'Cousine-Regular'
  },
  zoomIcon: {
    margin: moderateScale(10)
  },
  descriptionText: {
    fontSize: moderateScale(20),
    margin: moderateScale(8),
    marginLeft: horizontalScale(18),
    fontWeight: '500',
    color: Color.BlueC,
    fontFamily: 'Cousine-Bold'
  },
  footerView: {
    backgroundColor: Color.SecondaryColorA,
    borderWidth: 1,
    flex: 1,
    borderRadius: moderateScale(15),
    marginTop: '10%'
  },
  timeDurationView: {
    backgroundColor: Color.SecondaryColorB,
    margin: moderateScale(10),
    borderRadius: moderateScale(50),
    borderWidth: 1,
    borderColor: Color.White
  }
});

export default styles;
