//* Team Modal UI
import React, { useState } from "react";
import {
    Modal,
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView
} from "react-native";
import styles from "./teamModalStyle";

const TeamModal = ({ handleTeamName, isModalOpenTeam, setIsModalOpenTeam, teamName, setTeamName, teamIndex, editTeamModal }) => {

    const [editTeamName, seteditTeamName] = useState(teamName ?? '');

    let teamcondition = (name) => {
        let nameLength = () => {
            name.replace('.', '');
            setIsModalOpenTeam(!isModalOpenTeam);
        };

        if (name.length >= 0) {
            nameLength();
        } else {
            setIsModalOpenTeam(!isModalOpenTeam);
        }
    };

    //* save function when user save team
    const saveTeam = () => {
        if (editTeamName === "") {
            Alert.alert("Please enter Team name.");
        }
        else {
            if ((editTeamName.trim().length === 0)) {
                Alert.alert("ohh Enter keyword!");
            }
            else {
                handleTeamName(editTeamName, teamIndex);
                teamIndex !== undefined && editTeamModal();
            }
        }
    };

    //* cancel function when user cancel team
    const cancelTeam = () => {
        editTeamName.length >= 0 ?
            teamcondition(editTeamName) :
            seteditTeamName(!editTeamName);
    };

    return (
        <Modal transparent={true}
            visible={isModalOpenTeam}
            animationType='fade' >
            <SafeAreaView style={styles.safeAreaStyle}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.teamPopupBoxStyle}>
                        <View style={{ flexDirection: 'row', margin: 30, }}>
                            <Text style={{ fontSize: 22, }}>{teamIndex !== null ? 'Edit' : 'Enter'} Team Name</Text>
                        </View>
                        <View style={{ margin: 14 }}>
                            <TextInput maxLength={10}
                                autoFocus
                                keyboardType="default"
                                placeholder="Team Name"
                                defaultValue={editTeamName}
                                style={styles.InputFiledStyle}
                                onChangeText={name => seteditTeamName(name)}
                                placeholderTextColor={'black'} />
                        </View>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => saveTeam()}
                                style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 20, color: 'rgb(11, 107, 214)' }}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => cancelTeam()}
                                style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 20, color: 'rgb(11, 107, 214)' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
};

export default TeamModal;