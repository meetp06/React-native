import { StyleSheet, Text, View } from "react-native";

export default function ListEmpty() {

    return (
        <View style={styles.block}>
            <Text style={styles.innerText}>
                You don't have any goals added currently.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        marginTop: 5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    innerText: {
        textAlign: 'center',
        fontSize: 18,
        fontStyle: "italic",
    },
});