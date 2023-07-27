//*Team Modal style
import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        InputFiledStyle: {
            fontSize: 15,
            borderColor: 'rgb(75, 83, 87)',
            borderWidth: 1,
            margin: 10,
            borderRadius: 50,
            padding: 10,
            color: 'black',
        },
        safeAreaStyle: {
            backgroundColor: '#111111aa',
            flex: 1,
            justifyContent: 'center',
        },
        teamPopupBoxStyle: {
            margin: 30,
            backgroundColor: 'rgb(245, 231, 218)',
            flex: -1,
            borderRadius: 50,
            height: 300,
            justifyContent: 'center',
        },
        outerText: {
            flexDirection: 'row',
            margin: 30,
        },
        headText: {
            fontSize: 22,
        },
        outerInput: {
            margin: 14
        },
        bottomButton: {
            justifyContent: 'space-evenly',
            flexDirection: 'row'
        },
        buttonStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10
        },
        button: {
            fontSize: 20,
            color: 'rgb(11, 107, 214)'
        }

    },
);

export default styles;