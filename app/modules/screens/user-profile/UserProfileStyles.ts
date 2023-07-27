import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../theme';
import Color from '../../../theme/Colors';

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  bgImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: verticalScale(130)
  },
  defaultUser: {
    top: verticalScale(90),
    height: verticalScale(180),
    width: horizontalScale(180),
    backgroundColor: Color.Black,
    borderRadius: moderateScale(500),
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11
  },
  editIconContainer: {
    position: 'absolute',
    top: verticalScale(20),
    right: horizontalScale(20),
    backgroundColor: Color.BlueA,
    borderRadius: moderateScale(50),
    padding: moderateScale(5),
    borderWidth: 1
  },
  mainRoot: {
    flex: 1,
    backgroundColor: '#f4f4f8'
  },
  footer: {
    flex: 1
  },
  userNameView: {
    backgroundColor: Color.DullBackground,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '20%',
    width: '70%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.22,
    shadowRadius: 10.24,
    elevation: 13
  },
  nameStyle: {
    fontSize: moderateScale(23),
    alignSelf: 'center',
    margin: moderateScale(5),
    fontWeight: '900',
    fontFamily: 'Cousine-Regular'
  },
  userNumberView: {
    backgroundColor: Color.DullBackground,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '10%',
    width: '70%',
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    margin: moderateScale(20)
  },
  icon: {
    alignSelf: 'center',
    marginRight: horizontalScale(7)
  },
  userInfo: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: Color.DullBackground,
    flex: 1,
    width: '89%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10
  },
  userEmail: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  userInfoStyle: {
    alignSelf: 'center',
    fontFamily: 'Smooch-Regular',
    fontSize: moderateScale(15)
  },
  userEmailText: {
    fontFamily: 'Cousine-Regular',
    fontSize: moderateScale(18),
    fontWeight: '700',
    marginLeft: horizontalScale(10)
  },
  supportText: {
    alignSelf: 'flex-start'
  },
  supportTextStyle: {
    fontSize: moderateScale(15),
    color: Color.BackgroundColor,
    marginLeft: horizontalScale(10),
    marginTop: verticalScale(10),
    fontWeight: '600',
    fontFamily: 'Cousine-Regular',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});
export default styles;
