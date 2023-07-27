import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, Modal, StyleSheet } from "react-native";
import PlayerCard from '../UiScreen/playerCard';
import styles from "./teamNameModalStyle";

const PlayerList = ({ playerVisible, setEditData, setIndex, setTeamList, isModalOpenPlayer, setIsModalOpenPlayer, teamList }) => {
    return (
        <View>
            <Modal>
                <SafeAreaView style={styles.safeAreaView}>
                    <View>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.touchable} onPress={() => playerVisible()}>
                                <Text style={styles.player}>Add Player</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <PlayerCard setEditData={setEditData}
                                setIndex={setIndex}
                                setTeamList={setTeamList}
                                isModalOpenPlayer={isModalOpenPlayer}
                                setIsModalOpenPlayer={setIsModalOpenPlayer}
                                teamList={teamList} />
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    )
}

export default PlayerList;