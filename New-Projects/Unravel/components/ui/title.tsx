import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

export default function CustomTitle({ childern }: any) {
    return (
        <Text style={styles.title}>
            {childern}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primaryWhite,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: colors.primaryWhite,
        padding: 24,
    },

});