//* HomePage
import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import PlayerModal from "../ModalFiles/playerModal";
import TeamModal from "../ModalFiles/teamModal";
import styles from './homePageStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TeamCard from "./teamCard";
import AppStateExample from '../UiScreen/appState';
import BackHandlers from './backHandler';
import OpenWebsite from '../UiScreen/openWebsite';

const HeaderComponent = () => {

    const [teamName, setTeamName] = useState("");
    const [isModalOpenTeam, setIsModalOpenTeam] = useState(false);
    const [isModalOpenPlayer, setIsModalOpenPlayer] = useState(false);
    const [editData, setEditData] = useState("");
    const [index, setIndex] = useState(null);
    const [teamList, setTeamList] = useState([]);

    useEffect(() => {
        const StoreGetDataItem = async () => {
            const storeData = await AsyncStorage.getItem("Token")
            if (!storeData)
                return;
            const getData = JSON.parse(storeData);
            if (!getData)
                return;
            setTeamList(getData);
        }
        StoreGetDataItem();
    }, [])

    //*Team Modal Function
    const setModalVisibleTeam = () => {
        setIsModalOpenTeam(!isModalOpenTeam);
    };

    const StoreSetDataItem = async () => {
        const tokenData = JSON.stringify(teamList);
        await AsyncStorage.setItem("Token", tokenData, () => console.log("Team: ", tokenData));
    };

    //*Player Modal Function 
    const setModalVisiblePlayer = () => {
        setIsModalOpenPlayer(!isModalOpenPlayer);
        setIndex(null);
        StoreSetDataItem();
    };

    //*Team Name Function
    const handleTeamName = (name) => {
        setTeamName(name);
        setIsModalOpenTeam(false);
        let obj = {
            teamName: name,
            players: []
        };
        teamList?.push(obj);
        setTeamList(teamList);
        StoreSetDataItem();
    };

    const saveUpdatedTeamName = (name, index) => {
        teamList[index].teamName = name;
        setTeamList([...teamList]);
        StoreSetDataItem();
    };

    //*Player data store Function
    const handlePlayerDetail = (data) => {
        if (index !== null) {
            let teamIndex = teamList.findIndex((element) => element.teamName == data.teamName);
            teamList[teamIndex].players[index] = data;
            setTeamList(teamList);
        }
        else {
            let teamIndex = teamList.findIndex((element) => element.teamName == data.teamName);
            teamList[teamIndex].players.push(data);
            setTeamList(teamList);
        }
        setEditData("");
        setIndex(null);
        StoreSetDataItem();
    };

    return (
        <SafeAreaView style={styles.headerBox}>
            <>
                <View style={styles.buttonBarStyle}>
                    <TouchableOpacity onPress={() => setModalVisibleTeam()} style={styles.headerBackgroundColorStyle}>
                        <Text style={styles.dialogBoxButton}>Add Team</Text>
                    </TouchableOpacity>
                    <View style={styles.appStateStyle}>
                        <Text style={styles.inlineAppstateStyle}>{<AppStateExample />}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setModalVisiblePlayer()} style={styles.headerBackgroundColorStyle}>
                        <Text style={styles.dialogBoxButton}>Add Player</Text>
                    </TouchableOpacity>
                </View>
            </>
            <View style={styles.bodyPart}>
                <View style={styles.insideBodyPart}>
                    <TeamCard
                        teamName={teamName}
                        teamList={teamList}
                        setModalVisibleTeam={setModalVisibleTeam}
                        name={undefined}
                        setEditData={setEditData}
                        setIndex={setIndex}
                        setTeamList={setTeamList}
                        isModalOpenPlayer={isModalOpenPlayer}
                        setModalVisiblePlayer={() => setModalVisiblePlayer()}
                        seteditTeamName={undefined}
                        handleTeamName={(name, index) => saveUpdatedTeamName(name, index)}
                        editTeamName={undefined}
                    />
                </View>
                <View style={styles.openWebsite} >
                    <OpenWebsite />
                </View>
            </View>
            <BackHandlers />
            {isModalOpenTeam ? <TeamModal
                teamName={''}
                setTeamName={setTeamName}
                handleTeamName={(name) => handleTeamName(name)}
                isModalOpenTeam={isModalOpenTeam}
                setIsModalOpenTeam={setIsModalOpenTeam}
            /> : null}
            {isModalOpenPlayer ? <PlayerModal
                handlePlayerDetail={(data) => handlePlayerDetail(data)}
                setModalVisiblePlayer={() => setModalVisiblePlayer()}
                editData={editData}
                teamList={teamList}
            /> : null}
        </SafeAreaView>
    );
};

export default HeaderComponent;