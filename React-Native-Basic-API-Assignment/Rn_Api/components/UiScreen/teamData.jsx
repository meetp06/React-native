import React, { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import PlayerCard from './playerCard';
import TeamModal from '../ModalFiles/teamModal';

const TeamData = ({ team,
    teamIndex,
    editTeamName,
    handleTeamName,
    seteditTeamName,
    setEditData,
    setIsModalOpenPlayer,
    setModalVisiblePlayer,
    setTeamList,
    setIndex,
}) => {

    const [showPlayerCard, setShowPlayerCard] = useState(false);
    const [showTeamModal, setShowTeamModal] = useState(false);

    const showTeam = () => {
        setShowPlayerCard(!showPlayerCard);
    };

    const editTeamModal = () => {
        setShowTeamModal(!showTeamModal);
    };

    return (
        <SafeAreaView style={{ margin: 14 }}>
            <TouchableOpacity onPress={() => showTeam()}>
                <View style={styles.cardStyle}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Image source={require('../../assets/image/player1.jpg')} style={styles.imageStyle} />
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', marginLeft: 30, }}>
                            <Text style={{ fontSize: 24 }}>{team.teamName}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 17 }}>Team Number : {teamIndex + 1}</Text>
                        <Text style={{ fontSize: 17, marginLeft: 30 }}>Total Player : {team.players.length}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 8 }}>
                        <TouchableOpacity style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', width: 190 }} onPress={() => editTeamModal()}>
                            <Text style={{ fontSize: 17, alignSelf: 'center', margin: 4 }}>Edit Team Name</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {showTeamModal ? <TeamModal
                    editTeamName={editTeamName}
                    handleTeamName={handleTeamName}
                    seteditTeamName={seteditTeamName}
                    isModalOpenTeam={showTeamModal}
                    setIsModalOpenTeam={setShowTeamModal}
                    editTeamModal={editTeamModal}
                    teamName={team.teamName}
                    teamIndex={teamIndex}
                /> : null}

                {showPlayerCard ? <PlayerCard
                    setEditData={setEditData}
                    setIndex={setIndex}
                    setTeamList={setTeamList}
                    setModalVisiblePlayer={setModalVisiblePlayer}
                    setIsModalOpenPlayer={setIsModalOpenPlayer}
                    team={team}
                /> : null}
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        flexDirection: 'column',
        height: 130,
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black'
    },
    imageStyle: {
        height: 55,
        width: 55,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 10,
        marginLeft: 10
    }
});

export default TeamData;