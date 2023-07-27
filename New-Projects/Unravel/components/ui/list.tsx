import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

export default function RenderItem({ index, item }: any) {
    return (
        <View key={index} style={styles.indiGoal} >
            <Text style={{ color: 'white', padding: 8, fontSize: 18, textAlign: "right" }} >
                {`#${index + 1} `}
            </Text>
            <Text style={{ color: 'white', padding: 8, fontSize: 18, textAlign: "right" }} >
                {` Opponent's guess: ${item}`}
            </Text>
        </View >
    );
}

const styles = StyleSheet.create({
    indiGoal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 4,
        borderRadius: 18,
        borderColor: colors.primaryPurple,
        backgroundColor: colors.primaryYellow,
        borderWidth: 1,
    },
});