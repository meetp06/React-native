import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../theme';
import Color from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingBottom: verticalScale(16),
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(4),
    margin: verticalScale(15),
    borderRadius: moderateScale(50),
    borderColor: Color.Black,
    borderWidth: moderateScale(1),
    width: '85%',
  },
  searchInput: {
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    fontSize: moderateScale(16),
    fontFamily: 'Cousine-Regular',
    width: '90%',
  },
  searchIcon: {
    alignSelf: 'center',
  },
  emptyComponent: {
    flex: 1,
    alignItems: 'center',
    marginTop: verticalScale(120),
  },
  emptyComponentText: {
    fontSize: moderateScale(22),
    fontWeight: '500',
    fontFamily: 'Cousine-Regular',
  },
  flatlist: {
    width: '85%',
  },
});

export default styles;
