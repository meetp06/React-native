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
    FlatList
} from "react-native";
import styles from "./playerModalStyle";


const PlayerModal = ({ handlePlayerDetail, setModalVisiblePlayer, editData, teamList }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [century, setcentury] = useState("");
    const [age, setAge] = useState("");
    const [playerType, setPlayerType] = useState("");
    const [notPlayedMatch, setNotPlayedMatch] = useState("");
    const [playerRank, setPlayedRank] = useState("");
    const [selectedTeam, setSelectedTeam] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        setFirstName(editData.firstName);
        setLastName(editData.lastName);
        setcentury(editData.century);
        setAge(editData.age);
        setPlayerType(editData.playerType);
        setNotPlayedMatch(editData.notPlayedMatch);
        setPlayedRank(editData.playerRank);
        setSelectedTeam(editData.teamName);
        setPhoneNumber(editData.phoneNumber);
    }, [editData]);

    //* Some validation when user save their information
    const savePlayerDetail = () => {
        let isValid = true;
        if (!selectedTeam) {
            isValid = false;
            Alert.alert("Please select team.");
        }
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
        } else if (!phoneNumber) {
            isValid = false;
            Alert.alert("Please enter phoneNumber.");
        }

        if (isValid) {
            let obj = {
                firstName: firstName,
                lastName: lastName,
                century: century,
                age: age,
                playerType: playerType,
                notPlayedMatch: notPlayedMatch,
                playerRank: playerRank,
                teamName: selectedTeam,
                phoneNumber: phoneNumber,
            };
            handlePlayerDetail(obj);
            setModalVisiblePlayer();
        }
    };

    return (
        <Modal transparent={true}>
            <SafeAreaView style={styles.safeAreaView}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardStyle} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.InputFiledStyle}>
                            <View style={styles.headStyle}>
                                <Text style={styles.heading}>Enter Player Detail.</Text>
                            </View>
                            <View style={styles.modalView}>
                                <TextInput
                                    editable={false}
                                    placeholder="Select Team Name *"
                                    keyboardType="default"
                                    value={selectedTeam}
                                    style={{
                                        fontSize: 15,
                                        borderColor: 'rgb(75, 83, 87)',
                                        borderWidth: 1,
                                        margin: 10,
                                        borderRadius: 50,
                                        padding: 15,
                                        color: 'black',
                                        marginBottom: 10,
                                    }}
                                    placeholderTextColor={'black'}

                                />
                                <ScrollView horizontal={true}>
                                    <FlatList
                                        style={{ flexDirection: 'row' }}
                                        data={teamList}
                                        renderItem={({ item, index }) =>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                <TouchableOpacity style={{ borderWidth: 1, borderRadius: 50, padding: 5 }}
                                                    onPress={() => setSelectedTeam(item.teamName)}>
                                                    <Text>
                                                        {item.teamName}
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        }
                                    />
                                </ScrollView>
                                <TextInput value={firstName}
                                    autoFocus maxLength={11}
                                    keyboardType="default"
                                    placeholder="First Name *"
                                    style={{
                                        fontSize: 15,
                                        borderColor: 'rgb(75, 83, 87)',
                                        borderWidth: 1,
                                        margin: 10,
                                        borderRadius: 50,
                                        padding: 15,
                                        color: 'black',
                                        marginBottom: 10,
                                    }}
                                    placeholderTextColor={'black'}
                                    onChangeText={name => setFirstName(name)}
                                />
                                <TextInput value={lastName}
                                    maxLength={11}
                                    keyboardType="default"
                                    placeholder="Last Name *"
                                    style={{
                                        fontSize: 15,
                                        borderColor: 'rgb(75, 83, 87)',
                                        borderWidth: 1,
                                        margin: 10,
                                        borderRadius: 50,
                                        padding: 15,
                                        color: 'black',
                                        marginBottom: 10,
                                    }}
                                    placeholderTextColor={'black'}
                                    onChangeText={name => setLastName(name)}
                                />
                                <TextInput value={phoneNumber}
                                    maxLength={10}
                                    keyboardType="numeric"
                                    placeholder="Phone Number *"
                                    style={{
                                        fontSize: 15,
                                        borderColor: 'rgb(75, 83, 87)',
                                        borderWidth: 1,
                                        margin: 10,
                                        borderRadius: 50,
                                        padding: 15,
                                        color: 'black',
                                        marginBottom: 10,
                                    }}
                                    placeholderTextColor={'black'}
                                    onChangeText={(name) => {
                                        let num = name.replace(".", "");
                                        if (isNaN(num)) {
                                            setPhoneNumber('');
                                            Alert.alert("It is not a number");
                                        } else {
                                            setPhoneNumber(name);
                                        }
                                    }}
                                />
                                <TextInput value={century}
                                    maxLength={3}
                                    keyboardType="numeric"
                                    placeholder="century *"
                                    style={{
                                        fontSize: 15,
                                        borderColor: 'rgb(75, 83, 87)',
                                        borderWidth: 1,
                                        margin: 10,
                                        borderRadius: 50,
                                        padding: 15,
                                        color: 'black',
                                        marginBottom: 10,
                                    }}
                                    placeholderTextColor={'black'}
                                    onChangeText={(name) => {
                                        let num = name.replace(".", "");
                                        if (isNaN(num)) {
                                            setcentury('');
                                            Alert.alert("It is not a number");
                                        } else {
                                            setcentury(name);
                                        }
                                    }} />
                                <TextInput value={age}
                                    maxLength={2}
                                    keyboardType="numeric"
                                    placeholder="Age *"
                                    style={{
                                        fontSize: 15,
                                        borderColor: 'rgb(75, 83, 87)',
                                        borderWidth: 1,
                                        margin: 10,
                                        borderRadius: 50,
                                        padding: 15,
                                        color: 'black',
                                        marginBottom: 10,
                                    }}
                                    placeholderTextColor={'black'}
                                    onChangeText={(name) => {
                                        let num = name.replace(".", "");
                                        if (isNaN(num)) {
                                            setAge('');
                                            Alert.alert("It is not a number");
                                        } else {
                                            setAge(name);
                                        }
                                    }} />
                                <TextInput
                                    editable={false}
                                    placeholder="Select player type *"
                                    keyboardType="default"
                                    value={playerType}
                                    style={{
                                        fontSize: 15,
                                        borderColor: 'rgb(75, 83, 87)',
                                        borderWidth: 1,
                                        margin: 10,
                                        borderRadius: 50,
                                        padding: 15,
                                        color: 'black',
                                        marginBottom: 10,
                                    }}
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
                                    maxLength={3}
                                    keyboardType="numeric"
                                    placeholder="Not Played Match *"
                                    style={{
                                        fontSize: 15,
                                        borderColor: 'rgb(75, 83, 87)',
                                        borderWidth: 1,
                                        margin: 10,
                                        borderRadius: 50,
                                        padding: 15,
                                        color: 'black',
                                        marginBottom: 10,
                                    }}
                                    placeholderTextColor={'black'}
                                    onChangeText={(name) => {
                                        let num = name.replace(".", "");
                                        if (isNaN(num)) {
                                            setNotPlayedMatch('');
                                            Alert.alert("It is not a number");
                                        } else {
                                            setNotPlayedMatch(name);
                                        }
                                    }} />
                                <TextInput value={playerRank}
                                    maxLength={4}
                                    keyboardType="numeric"
                                    placeholder="Player Rank"
                                    style={{
                                        fontSize: 15,
                                        borderColor: 'rgb(75, 83, 87)',
                                        borderWidth: 1,
                                        margin: 10,
                                        borderRadius: 50,
                                        padding: 15,
                                        color: 'black',
                                        marginBottom: 10,
                                    }}
                                    placeholderTextColor={'black'}
                                    onChangeText={(name) => {
                                        let num = name.replace(".", "");
                                        if (isNaN(num)) {
                                            setPlayedRank('');
                                            Alert.alert("It is not a number");
                                        } else {
                                            setPlayedRank(name);
                                        }
                                    }} />
                            </View>
                            <View style={styles.bottomStyle}>
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