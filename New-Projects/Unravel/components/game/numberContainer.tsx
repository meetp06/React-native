import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

export default function NumberContainer({ childern }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>
                {childern}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        color: colors.primaryYellow,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        borderRadius: 22,

    },

    number: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primaryYellow,
        textAlign: 'center',
        padding: 24,
    },

});