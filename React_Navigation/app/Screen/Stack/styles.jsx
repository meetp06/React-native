//*HomePageStyle

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pageDesign: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    text: {
        fontSize: 30,
        color: 'white',
        flex: 8,
        alignSelf: 'center',
        flexDirection: 'column',
    },
    image: {
        height: 350,
        width: 350,
        flex: 15,
        backgroundColor: 'black',
    },
    image2: {
        height: 270,
        width: 270,
        flex: 15,
        backgroundColor: 'black',
        marginTop: 40,
    },
    buttonView: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: 'black',
    },
});

export default styles;
