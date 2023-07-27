import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalComp({ index, item, onDelete }: any) {

    const middleDeleteHandler = () => {
        onDelete(index);
    }

    return <View key={index} style={styles.indiGoal} >

        <Pressable
            onPress={middleDeleteHandler}
            style={({ pressed }) => pressed && styles.pressedItem}
        >
            <Text style={{ color: 'white', padding: 8, }} >
                {"- " + `${item}`}
            </Text>
        </Pressable >

    </View >
}

const styles = StyleSheet.create({
    indiGoal: {
        margin: 4,
        borderRadius: 7,
        borderColor: '#5e0acc',
        backgroundColor: '#5e0acc',
        borderWidth: 1,
    },

    pressedItem: {
        opacity: 0.5,
    }
});