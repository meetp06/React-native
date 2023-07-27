import { StyleSheet } from 'react-native';
import { COLORS, moderateScale } from '../../../theme';

const styles = (isFocused) =>
    StyleSheet.create({
        itemRootContainer: isFocused
            ? {
                  padding: moderateScale(10),
                  marginHorizontal: moderateScale(15),
                  backgroundColor: COLORS.PrimaryColor,
                  borderRadius: moderateScale(15),
              }
            : {
                  padding: moderateScale(10),
                  marginHorizontal: moderateScale(15),
              },
        drawerIcon: {
            marginRight: moderateScale(30),
        },
        drawerTitleStyle: isFocused
            ? {
                  color: COLORS.white,
              }
            : {},
        itemContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    });

export default styles;
