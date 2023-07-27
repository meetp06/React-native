/*
 * Player Item component
 *
 * @param player - a single object having player info.
 * @param index - index of the current player.
 * @param teamIndex - index of the team.
 * @return card having info of the player.
 */

import { useContext } from 'react';
import {
    Alert,
    Linking,
    Platform,
    Pressable,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { playerImage, callImage } from '../../../constants/ImagesLocation';
import Strings from '../../../constants/Strings';
import useModalHook from '../../Hooks/UseModal';
import TeamContext from '../../Hooks/Team/TeamContext';
import { deleteTeamPlayer } from '../../Hooks/Team/TeamFunctions';
import playerItemStyle from './PlayerItemStyle';
import CircularImage from '../../CircularImage';
import PlayerModalView from '../PlayerModal';

const PlayerItem = ({ player, index, teamIndex }) => {
    //* State for edit player modal on tapping the card
    const [playerModal, togglePlayerModal] = useModalHook();
    const { teamArray, setTeamArray } = useContext(TeamContext);

    //* on long press delete player
    const deletePlayer = () => {
        Alert.alert(
            Strings.confirmTitle,
            'Do you want to delete current player?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        deleteTeamPlayer(
                            teamIndex,
                            index,
                            teamArray,
                            setTeamArray
                        );
                    },
                },

                { text: 'No' },
            ]
        );
    };

    //* Call player function
    const onCallTap = async () => {
        const phoneNumber =
            (Platform.OS === 'android' ? `tel:+91` : 'telprompt:+91') +
            player.phone;

        try {
            await Linking.openURL(phoneNumber);
        } catch (error) {
            Alert.alert(Strings.errorTitle, "Can't call the player");
        }
    };

    return (
        <Pressable
            onPress={togglePlayerModal}
            onLongPress={deletePlayer}
            delayLongPress={700}>
            <View style={playerItemStyle.root}>
                <View style={playerItemStyle.playerUpperRow}>
                    {playerModal ? (
                        <PlayerModalView
                            player={player}
                            toggleModal={togglePlayerModal}
                            playerIndex={index}
                            teamIndex={teamIndex}
                        />
                    ) : null}
                    <CircularImage src={playerImage} />
                    <View>
                        <Text style={playerItemStyle.name}>
                            {' '}
                            {player.fName + ' ' + player.lName}{' '}
                        </Text>
                        <Text style={playerItemStyle.playerType}>
                            {' '}
                            {player.type}{' '}
                        </Text>
                    </View>
                    <View style={playerItemStyle.callContainer}>
                        <TouchableOpacity
                            onPress={onCallTap}
                            style={playerItemStyle.callTouchable}>
                            <View style={playerItemStyle.callRow}>
                                <CircularImage
                                    src={callImage}
                                    styleForImage={{ width: 25, height: 25 }}
                                />
                                <Text style={playerItemStyle.callText}>
                                    {' '}
                                    +91 {player.phone}{' '}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={playerItemStyle.playerLowerRow}>
                    <View style={playerItemStyle.playerStatContainer}>
                        <Text style={playerItemStyle.statType}> Matches </Text>
                        <Text style={playerItemStyle.statValue}>
                            {' '}
                            {player.nMatches}{' '}
                        </Text>
                    </View>
                    <View style={playerItemStyle.playerStatContainer}>
                        <Text style={playerItemStyle.statType}> Age </Text>
                        <Text style={playerItemStyle.statValue}>
                            {' '}
                            {player.age}{' '}
                        </Text>
                    </View>
                    <View style={playerItemStyle.playerStatContainer}>
                        <Text style={playerItemStyle.statType}>
                            {' '}
                            Centuries{' '}
                        </Text>
                        <Text style={playerItemStyle.statValue}>
                            {' '}
                            {player.century}{' '}
                        </Text>
                    </View>
                    <View style={playerItemStyle.playerStatContainer}>
                        <Text style={playerItemStyle.statType}> Country </Text>
                        <Text style={playerItemStyle.statValue}>
                            {' '}
                            {player.country}{' '}
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default PlayerItem;
