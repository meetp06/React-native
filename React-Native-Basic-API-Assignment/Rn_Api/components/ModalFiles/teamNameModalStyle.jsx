import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaView: {
        margin: 20
    },
    header: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    touchable: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        width: 150
    },
    player: {
        fontSize: 20,
        alignSelf: 'center',
        margin: 4
    }

})

export default styles;