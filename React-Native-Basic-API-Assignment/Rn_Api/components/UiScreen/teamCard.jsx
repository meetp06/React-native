import React from "react";
import { FlatList, View } from "react-native";
import TeamData from './teamData';

const TeamCard = ({ teamList,
    setEditData,
    setIndex,
    handleTeamName,
    setModalVisiblePlayer

}) => {
    return (
        <View>
            {teamList?.length > 0 &&
                <FlatList
                    data={teamList}
                    renderItem={({ item, index }) =>
                        <TeamData handleTeamName={handleTeamName} team={item} teamIndex={index}
                            setModalVisiblePlayer={setModalVisiblePlayer} setEditData={setEditData}
                            setIndex={setIndex} />
                    }
                />
            }
        </View>
    );
};

export default TeamCard;