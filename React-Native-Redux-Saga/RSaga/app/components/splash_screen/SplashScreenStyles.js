import { StyleSheet } from 'react-native';
import { moderateScale } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: moderateScale(50),
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default styles;
