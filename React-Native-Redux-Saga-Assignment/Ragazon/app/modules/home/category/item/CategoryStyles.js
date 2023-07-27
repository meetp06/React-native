import { StyleSheet } from 'react-native';
import {
  COLORS,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const styles = (isSelected) =>
  StyleSheet.create({
    itemContainerStyle: isSelected
      ? {
          marginVertical: verticalScale(10),
          paddingHorizontal: horizontalScale(16),
          paddingVertical: verticalScale(8),
          borderRadius: moderateScale(10),
          borderWidth: 0.17,
          marginRight: horizontalScale(8),
          backgroundColor: COLORS.PrimaryColor,
          borderColor: COLORS.PrimaryColor,
        }
      : {
          marginVertical: verticalScale(10),
          paddingHorizontal: horizontalScale(16),
          paddingVertical: verticalScale(8),
          borderRadius: moderateScale(10),
          borderWidth: 0.17,
          borderColor: COLORS.PrimaryColor,
          backgroundColor: COLORS.lightGrey,
          marginRight: horizontalScale(8),
        },

    itemTextStyle: isSelected
      ? {
          fontSize: moderateScale(14),
          fontWeight: '600',
          color: COLORS.white,
        }
      : {
          fontSize: moderateScale(14),
          color: COLORS.black,
          fontWeight: '600',
        },
  });

export default styles;
