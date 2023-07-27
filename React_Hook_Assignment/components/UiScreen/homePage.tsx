//* HomePage

import React, { useState } from "react";
import {
    Alert,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    ImageBackground
} from "react-native";
import PlayerModal from "../ModalFiles/playerModal";
import TeamModal from "../ModalFiles/teamModal";
import PlayerCard from "./playerCard";
import styles from '../StyleFiles/homePageStyle';

const HeaderComponent = () => {

    const [teamName, setTeamName] = useState("");
    const [isModalOpenTeam, setIsModalOpenTeam] = useState(false);
    const [isModalOpenPlayer, setIsModalOpenPlayer] = useState(false);
    const [editData, setEditData] = useState("");
    const [index, setIndex] = useState(null);
    const [teamList, setTeamList] = useState<any[]>([]);

    //*Team Modal Function
    const setModalVisibleTeam = () => {
        setIsModalOpenTeam(isModalOpenTeam !== true);
    };

    //*Player Modal Function
    const setModalVisiblePlayer = () => {
        setIsModalOpenPlayer(isModalOpenPlayer !== true);
        setIndex(null);
        setEditData("");
    };

    //*Team Name Function
    const handleTeamName = (name: any) => {
        setIsModalOpenTeam(false);
        let obj = {
            teamName: name,
            players: []
        };
        teamList.push(obj);
        setTeamList(teamList);
    };

    //*Plater data store Function
    const handlePlayerDetail = (data: any) => {
        if (index !== null) {
            teamList[0].players[index] = data;
            setTeamList(teamList);
        }
        else {
            teamList[0].players.push(data);
            setTeamList(teamList);
        }
    }

    //* Alert 
    const playerVisible = () => {
        if (teamName === "") {
            Alert.alert("First Enter Add Team.")
        } else {
            setModalVisiblePlayer()
        }
    }

    return (

        <SafeAreaView style={styles.headerBox}>
            <View>
                <ImageBackground source={require('../../assets/image/background.jpeg')} >

                    <View style={styles.appNameStyle}>
                        <View >
                            <Text style={styles.headingBorderStyle}>Simform League</Text>
                        </View>

                        <View style={styles.drawerBorder}>
                            <TouchableOpacity onPress={() => { }} style={{ paddingTop: 3, paddingLeft: 2 }}>
                                <Image source={require('../../assets/image/drawer.png')} style={styles.drawer} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.dialogBox}>
                        
                        <View style={styles.teamNameStyle}>
                            <Text style={{ fontSize: 20 }}> Team Name: {teamName} </Text>
                        </View>

                        <View style={styles.buttonBarStyle}>
                            <View>
                                <TouchableOpacity onPress={() => setModalVisibleTeam()}>
                                    <Text style={styles.dialogBoxButton}> {teamName.length >= 1 ? <Text>Edit Team</Text> : <Text>Add Team</Text>} </Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity onPress={() => playerVisible()}>
                                    <Text style={styles.dialogBoxButton}>Add Player</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ImageBackground>
            </View>

            <PlayerCard setEditData={setEditData} setIndex={setIndex} setTeamList={setTeamList} isModalOpenPlayer={isModalOpenPlayer} setIsModalOpenPlayer={setIsModalOpenPlayer} teamList={teamList} />

            <View style={{ height: 100, width: '100%' }} >

            </View>

            {isModalOpenTeam ? <TeamModal teamName={teamName} setTeamName={setTeamName} handleTeamName={(name: any) => handleTeamName(name)} isModalOpenTeam={isModalOpenTeam} setIsModalOpenTeam={setIsModalOpenTeam} /> : null}
            {isModalOpenPlayer ? <PlayerModal handlePlayerDetail={(data: any) => handlePlayerDetail(data)} setModalVisiblePlayer={() => setModalVisiblePlayer()} editData={editData} /> : null}

        </SafeAreaView>

    );
};

export default HeaderComponent;