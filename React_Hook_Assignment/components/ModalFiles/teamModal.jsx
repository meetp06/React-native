//* Team Modal UI

import React from "react";
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
import styles from "../StyleFiles/teamModalStyle";

const TeamModal = ({ handleTeamName, isModalOpenTeam, setIsModalOpenTeam, teamName, setTeamName }) => {

    //* save function when user save team
    saveTeam = () => { teamName === "" ? Alert.alert("Please enter Team name.") : ((teamName.trim().length === 0) ? Alert.alert("ohh Enter keyword!") : handleTeamName(teamName)) }

     //* cancel function when user cancel team
    cancelTeam = () => setIsModalOpenTeam(!isModalOpenTeam);

    return (
        <Modal transparent={true}
            visible={isModalOpenTeam}
            animationType='slide'
        >
            <SafeAreaView style={styles.safeAreaStyle}>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.teamPopupBoxStyle}>

                        <View style={{ flexDirection: 'row', margin: 30, }}>
                            <Text style={{ fontSize: 22, }}>Enter Team Name</Text>
                        </View>

                        <View style={{ margin: 14 }}>
                            <TextInput maxLength={18}
                                autoFocus
                                keyboardType="default"
                                placeholder="Team Name"
                                style={styles.InputFiledStyle}
                                onChangeText={name => setTeamName(name)}
                                placeholderTextColor={'black'} />
                        </View>

                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>

                            <TouchableOpacity onPress={() => this.saveTeam()}
                                style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 20, color: 'rgb(11, 107, 214)' }}>Save</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.cancelTeam()}
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