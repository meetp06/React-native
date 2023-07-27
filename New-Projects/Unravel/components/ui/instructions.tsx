import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

export default function Instruction({ children, style }: any) {
    return (
        <Text style={[styles.infoText, style]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({

    infoText: {
        color: colors.primaryYellow,
        textAlign: 'center',
        fontSize: 22,
    },

});