import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme/matrix';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: verticalScale(10),
    padding: moderateScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    margin: moderateScale(8),
    marginTop: verticalScale(15),
    borderWidth: moderateScale(0.7),
    borderRadius: moderateScale(10),
    borderColor: '#1A237E',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  image: {
    height: verticalScale(100),
    width: horizontalScale(100),
    borderRadius: moderateScale(15),
    borderWidth: 1.4,
    borderColor: '#311B92',
  },
  username: {
    flexDirection: 'row',
  },
  userDetail: {
    padding: moderateScale(17),
    width: '70%',
    flexDirection: 'column',
  },
  name: {
    fontSize: moderateScale(17),
    letterSpacing: 1,
    padding: moderateScale(4),
    fontWeight: '500',
  },
  email: {
    fontSize: moderateScale(14),
  },
  mainView: {
    backgroundColor: '#E8EAF6',
  },
});

export default styles;
