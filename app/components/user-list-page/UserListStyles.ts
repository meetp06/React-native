import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../theme';
import Color from '../../theme/Colors';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(16),
    backgroundColor: Color.White,
    borderRadius: moderateScale(8),
    padding: moderateScale(16),
    width: '100%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
    flex: 1,
  },
  avatar: {
    width: horizontalScale(60),
    height: verticalScale(60),
    borderRadius: moderateScale(30),
    marginRight: horizontalScale(16),
  },
  detailsContainer: {
    marginTop: verticalScale(10),
  },
  name: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    marginBottom: verticalScale(4),
    fontFamily: 'Cousine-Bold',
  },
  email: {
    fontSize: moderateScale(14),
    color: Color.EmailColor,
    fontFamily: 'Cousine-Regular',
  },
});

export default styles;
