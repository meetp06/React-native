import { useEffect, useState } from "react";
import { Text, StyleSheet, View, Alert, FlatList } from "react-native";
import NumberContainer from "../components/game/numberContainer";
import Card from "../components/ui/card";
import Instruction from "../components/ui/instructions";
import RenderItem from "../components/ui/list";
import CustomButton from "../components/ui/primaryButton";
import CustomTitle from "../components/ui/title";

export default function OnGame({ userNum, gameOverCall }) {

    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(99);
    const [curHold, setCurHold] = useState(50);
    const [trialsArray, setTrialArray] = useState([50]);

    useEffect(() => {
        if (curHold == userNum) {
            gameOverCall(trialsArray.length);
        }
    }, [curHold, userNum, gameOverCall])

    const giveAlert = () => {
        Alert.alert("Don't Lie!!", "You know that this is wrong...");
        return;
    }

    const giveMiddle = () => {
        const middle = Math.floor((start + end) / 2);
        setCurHold(middle);
        trialsArray.unshift(middle);
        setTrialArray((prevRound) => trialsArray.filter((val, index, self) => index == self.indexOf(val)));
    }

    const onButtonPress = (sign) => {

        if (sign == '+') {

            if (userNum <= curHold) {
                giveAlert();
                return;
            }

            setStart(curHold + 1);

        } else {

            if (userNum >= curHold) {
                giveAlert();
                return;
            }

            setEnd(curHold - 1);
        }

        giveMiddle();
    }

    return (
        <View style={styles.mainBody}>
            <CustomTitle childern={"Game Screen"} />
            <NumberContainer childern={curHold} />

            <Card>
                <View>
                    <Instruction children={'Higher or Lower'} style={{ marginBottom: 5 }} />
                    <View style={styles.rowButton}>
                        <CustomButton onPress={onButtonPress.bind(this, '+')} > + </CustomButton>
                        <CustomButton onPress={onButtonPress.bind(this, '-')}> - </CustomButton>
                    </View>
                </View>
            </Card>

            <View style={{ marginTop: 10, }} >
                <FlatList
                    data={trialsArray}
                    renderItem={({ index, item }) => {
                        return (<RenderItem index={trialsArray.length - index - 1} item={item} />)
                    }}
                    keyExtractor={(item) => item.index + (Math.random()) * item.item}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainBody: {
        padding: 20,
    },

    rowButton: {
        marginTop: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
});