import { StyleSheet } from 'react-native';
import { moderateScale } from './Metrics';

const applicationStyles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    screenGrow: {
        flexGrow: 1,
    },

    screenWhite: {
        backgroundColor: 'white',
    },

    screenTitleStyle: {
        fontSize: moderateScale(17),
        color: 'black',
    },

    drawerTitleStyle: {
        fontSize: moderateScale(15),
        color: 'black',
    },

    errorTextStyle: {
        marginLeft: moderateScale(10),
        fontSize: moderateScale(14),
        color: 'red',
    },
});

export default applicationStyles;
