import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/ui/primaryButton";
import CustomTitle from "../components/ui/title";
import colors from "../constants/colors";

export default function GameOver({ onRestart, roundNum, userNum }: any) {
    return (
        <View style={styles.root}>

            <CustomTitle childern={'Game Over'} />

            <View style={styles.roundImage}>
                <Image
                    source={require('../assets/success.png')}
                    style={styles.image}
                />
            </View>

            <View >
                <Text style={styles.insTruc}>
                    Your phone took <Text style={{ color: colors.primaryPurple }}> {roundNum} </Text> tries for guesssing <Text style={{ color: colors.primaryPurple }}> {userNum} </Text>.
                </Text>
            </View>

            <CustomButton children={'Restart the game'} onPress={onRestart} />

        </View >
    )
}

const styles = StyleSheet.create({

    root: {
        padding: 24,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    roundImage: {
        marginTop: 20,
        borderRadius: 150,
        borderWidth: 3,
        width: 300,
        height: 300,
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: '100%',
    },

    insTruc: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        marginBottom: 10,
        fontWeight: 'bold',
        fontStyle: "italic",
    },
});