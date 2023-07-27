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
import styles from "./playerCardStyle";

//* PlayerCard Props
const PlayerCard = ({ setEditData,
    setIndex,
    setTeamList,
    team,
    teamList,
    setModalVisiblePlayer
}) => {

    //* Alertfunction for PlayerCard
    const alertfunction = (index, teamIndex) => Alert.alert(
        'Delete',
        'Are you sure',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),

            },
            {
                text: 'OK',
                style: 'destructive',
                onPress: () => {
                    teamList[teamIndex].players.splice(index, 1);
                    setTeamList([...teamList]);
                }
            },
        ],
        { cancelable: false },
    );

    const getEditPlayerDetail = (detail, index) => {
        setModalVisiblePlayer();
        setEditData(detail);
        setIndex(index);
    };

    //* PlayerCard Component
    return (
        <View>
            {
                <View>
                    {team.players.length > 0 &&
                        <FlatList showsVerticalScrollIndicator={false}
                            data={team.players}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity onLongPress={() => alertfunction(index)}>
                                    <View style={styles.boxStyle} key={index}>
                                        <View style={styles.topBarStyle}>
                                            <View style={styles.cardBackgroundStyle}>
                                                <Image source={require('../../assets/image/player1.jpg')} style={styles.imageStyle} />
                                            </View>
                                            <View style={styles.userNameStyle}>
                                                <Text style={styles.nameStyle}>{item.firstName + " " + item.lastName}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.bottomBarStyle}>
                                            <Text style={styles.playerInfoStyle}>Matchs: {item.notPlayedMatch}    </Text>
                                            <Text style={styles.playerInfoStyle}>Player Type: {item.playerType}</Text>
                                        </View>
                                        <View style={styles.editPlayerBoxStyle}>
                                            <TouchableOpacity onPress={() => getEditPlayerDetail(item, index)}>
                                                <Text style={styles.editPlayerStyle}>Edit Player</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    }
                </View>
            }
        </View>
    );
};

export default PlayerCard;