import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";

export default function Card({ children }: any) {
    return (
        <View style={styles.mainBody}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    mainBody: {
        marginHorizontal: 12,
        marginTop: 50,
        padding: 12,
        backgroundColor: colors.primaryPurple,
        borderRadius: 12,
        elevation: 8,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 16,
        alignItems: 'stretch',
    },
});