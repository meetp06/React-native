//* All Player Modal Data is here

import React, { useEffect, useState } from "react";
import {
    Modal,
    SafeAreaView,
    View,
    Text,
    TextInput,
    Button,
    ScrollView,
    Alert,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
} from "react-native";
import styles from "../StyleFiles/playerModalStyle";

const PlayerModal = ({ handlePlayerDetail, setModalVisiblePlayer, editData }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [century, setcentury] = useState("");
    const [age, setAge] = useState("");
    const [playerType, setPlayerType] = useState("");
    const [notPlayedMatch, setNotPlayedMatch] = useState("");
    const [playerRank, setPlayedRank] = useState("");

    useEffect(() => {
        setFirstName(editData.firstName);
        setLastName(editData.lastName);
        setcentury(editData.century);
        setAge(editData.age);
        setPlayerType(editData.playerType);
        setNotPlayedMatch(editData.notPlayedMatch);
        setPlayedRank(editData.playerRank);
    }, [editData]);


    //* Some validation when user save their information
    const savePlayerDetail = () => {
        let isValid = true;
        if (!firstName) {
            isValid = false;
            Alert.alert("Please enter first name.");
        }
        else if (!lastName) {
            isValid = false;
            Alert.alert("Please enter last name.");
        }
        else if (!century) {
            isValid = false;
            Alert.alert("Please enter century.");
        }
        else if (!age) {
            isValid = false;
            Alert.alert("Please enter age.");
        }
        else if (!playerType) {
            isValid = false;
            Alert.alert("Please enter player type.");
        }
        else if (!notPlayedMatch) {
            isValid = false;
            Alert.alert("Please enter not played match.");
        }

        if (isValid) {
            let obj = {
                firstName: firstName,
                lastName: lastName,
                century: century,
                age: age,
                playerType: playerType,
                notPlayedMatch: notPlayedMatch,
                playerRank: playerRank
            };
            handlePlayerDetail(obj);
            setModalVisiblePlayer();
        }
    };

    return (
        <Modal transparent={true}>

            <SafeAreaView style={{ backgroundColor: '#111111aa', flex: 1 }}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ margin: 40, backgroundColor: 'rgb(245, 231, 218)', flex: 1, borderRadius: 50 }}>

                            <View style={{ flexDirection: 'row', margin: 30 }}>
                                <Text style={{ fontSize: 22, }}>Enter Player Detail.</Text>
                            </View>

                            <View style={{ margin: 14, }}>
                                <TextInput value={firstName} autoFocus maxLength={15} keyboardType="default" placeholder="First Name *" style={styles.InputFiledStyle} placeholderTextColor={'black'} onChangeText={name => setFirstName(name)} />
                                <TextInput value={lastName} maxLength={15} keyboardType="default" placeholder="Last Name *" style={styles.InputFiledStyle} placeholderTextColor={'black'} onChangeText={name => setLastName(name)} />
                                <TextInput value={century}
                                    keyboardType="numeric"
                                    placeholder="century *"
                                    style={styles.InputFiledStyle}
                                    placeholderTextColor={'black'}
                                    onChangeText={(name) => {
                                        let num = name.replace(".", "");
                                        if (isNaN(num)) {
                                            setcentury('')
                                            Alert.alert("It is not a number")
                                        } else {
                                            setcentury(name)
                                        }
                                    }} />

                                <TextInput value={age}
                                    keyboardType="numeric"
                                    placeholder="Age *"
                                    style={styles.InputFiledStyle}
                                    placeholderTextColor={'black'}
                                    onChangeText={(name) => {
                                        let num = name.replace(".", "");
                                        if (isNaN(num)) {
                                            setAge('')
                                            Alert.alert("It is not a number")
                                        } else {
                                            setAge(name)
                                        }
                                    }} />

                                <TextInput
                                    placeholder="Select player type *"
                                    keyboardType="default"
                                    value={playerType}
                                    style={styles.InputFiledStyle}
                                    placeholderTextColor={'black'}
                                />

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <TouchableOpacity
                                        style={{ borderWidth: 1, borderRadius: 50, padding: 5 }}
                                        onPress={() => setPlayerType('All rounder')}>
                                        <Text>
                                            All rounder
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{ borderWidth: 1, borderRadius: 50, padding: 5 }}
                                        onPress={() => setPlayerType('Batsman')}>
                                        <Text>
                                            Batsman
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => setPlayerType('Bowler')}
                                        style={{ borderWidth: 1, borderRadius: 50, padding: 5 }}>
                                        <Text>
                                            Bowler
                                        </Text>
                                    </TouchableOpacity>
                                </View>



                                <TextInput value={notPlayedMatch}
                                    keyboardType="numeric"
                                    placeholder="Not Played Match *"
                                    style={styles.InputFiledStyle}
                                    placeholderTextColor={'black'}
                                    onChangeText={(name) => {
                                        let num = name.replace(".", "");
                                        if (isNaN(num)) {
                                            setNotPlayedMatch('')
                                            Alert.alert("It is not a number")
                                        } else {
                                            setNotPlayedMatch(name)
                                        }
                                    }} />
                                <TextInput value={playerRank}
                                    keyboardType="numeric"
                                    placeholder="Player Rank"
                                    style={styles.InputFiledStyle}
                                    placeholderTextColor={'black'}
                                    onChangeText={(name) => {
                                        let num = name.replace(".", "");
                                        if (isNaN(num)) {
                                            setPlayedRank('')
                                            Alert.alert("It is not a number")
                                        } else {
                                            setPlayedRank(name)
                                        }
                                    }} />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                                <Button title="Save" onPress={() => savePlayerDetail()} />
                                <Button title="Cancel" onPress={() => setModalVisiblePlayer()} />
                            </View>

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>

        </Modal>
    );
};



export default PlayerModal;