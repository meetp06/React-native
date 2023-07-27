import { StyleSheet } from 'react-native';
import { moderateScale } from './Metrics';
import Colors from './Colors';

const applicationStyles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    screenTitleStyle: {
        fontSize: moderateScale(17),
        color: Colors.black,
    },
    drawerTitleStyle: {
        fontSize: moderateScale(15),
        color: Colors.black,
    },
    errorTextStyle: {
        marginLeft: moderateScale(10),
        fontSize: moderateScale(14),
        color: Colors.red,
    },
});

export default applicationStyles;
