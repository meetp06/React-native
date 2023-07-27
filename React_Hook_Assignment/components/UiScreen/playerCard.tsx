//* Player Card

import React from "react";
import {
    View,
    FlatList,
    TouchableOpacity,
    Image,
    Text,
    Platform,
    Alert
} from "react-native";
import styles from "../StyleFiles/playerCardStyle";

//* PlayerCard Props
const PlayerCard = ({ setEditData,
    setIndex,
    setTeamList,
    isModalOpenPlayer,
    setIsModalOpenPlayer,
    teamList }: any) => {

//* Alertfunction for PlayerCard
    const alertfunction = (index: any) => Alert.alert(
        'Delete',
        'Are you sure',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
            },
            {
                text: 'OK',
                onPress: () => {
                    teamList[0].players.splice(index, 1);
                    setTeamList([...teamList])
                }
            },
        ],
        { cancelable: false },
    );

    const setModalVisiblePlayer = () => {
        setIsModalOpenPlayer(isModalOpenPlayer !== true);
    };

    const getEditPlayerDetail = (detail: any, index: any) => {
        setModalVisiblePlayer();
        setEditData(detail);
        setIndex(index);
    }

    //* PlayerCard Component
    return (
        <View style={{ backgroundColor: 'rgb(215, 216, 219)' }}>

            {teamList.length > 0 && teamList.map((team: any, i: any) => {

                return (

                    <View key={i}>
                        {team.players.length > 0 &&
                            <FlatList showsVerticalScrollIndicator={false}
                                data={team.players}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) =>

                                    <TouchableOpacity onLongPress={() => alertfunction(index)}>
                                        <View style={styles.boxStyle} key={index}>

                                            <View style={styles.topBarStyle}>
                                                <View style={styles.cardBackgroundStyle}>
                                                    <Image source={require('../../assets/image/player1.jpg')}
                                                        style={styles.imageStyle} />
                                                </View>

                                                <View style={styles.userNameStyle}>
                                                    <Text style={{ fontSize: 22 }}>{item.firstName}  </Text>
                                                    <Text style={{ fontSize: 22 }}>{item.lastName}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.bottomBarStyle}>
                                                <Text style={{ fontSize: Platform.OS === 'android' ? 16 : 16 }}>Not Played Match: {item.notPlayedMatch}    </Text>
                                                <Text style={{ fontSize: Platform.OS === 'android' ? 16 : 16 }}>Type Of Player: {item.playerType}</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                <TouchableOpacity onPress={() => getEditPlayerDetail(item, index)}>
                                                    <Text style={{ color: 'rgb(11, 107, 214)', fontSize: 19, marginBottom: 10, }}>Edit Player</Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                        }

                    </View>
                );
            })}
        </View>
    )
}

export default PlayerCard;