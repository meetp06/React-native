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
    },
);

export default styles;