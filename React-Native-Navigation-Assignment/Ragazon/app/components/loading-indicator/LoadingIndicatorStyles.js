import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

const loadingScreen = StyleSheet.create({
    loaderStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderBox: {
        padding: 20,
        justifyContent: 'space-between',
    },
    indicatorText: {
        fontSize: 16,
        marginTop: 12,
        color: COLORS.white,
        fontStyle: 'italic',
    },
});

export default loadingScreen;
