/*
 * Team Item component.
 *
 * @param team - object having team name and player array.
 * @param index - index of the team.
 * @return team card with name and edit button.
 */

import { memo, useCallback, useContext } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import Strings from '../../../constants/Strings';
import { playerImage } from '../../../constants/ImagesLocation';
import TeamContext from '../../Hooks/Team/TeamContext';
import useModalHook from '../../Hooks/UseModal';
import CustomButton from '../../CustomButton';
import { deleteTeam } from '../../Hooks/Team/TeamFunctions';
import CircularImage from '../../CircularImage';
import AddTeamModal from '../TeamModal';
import PlayerScreen from '../../Player/PlayerScreen';
import teamItemStyle from './TeamItemStyle';

const TeamItem = ({ team, index }) => {
    //* States for showing player list modal and edit team name modal
    const [teamModal, toggleModal] = useModalHook();
    const [showPlayer, toggleShowPlayer] = useModalHook();
    const { teamArray, setTeamArray } = useContext(TeamContext);

    const onEditTap = useCallback(() => {
        toggleModal();
    }, []);

    const deleteCurTeam = () => {
        Alert.alert(
            Strings.confirmTitle,
            'Do you want to delete current team?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        deleteTeam(index, teamArray, setTeamArray);
                    },
                },
                { text: 'No' },
            ]
        );
    };

    return (
        <Pressable
            onPress={toggleShowPlayer}
            onLongPress={deleteCurTeam}
            delayLongPress={700}>
            {teamModal ? (
                <AddTeamModal
                    teamModal={teamModal}
                    toggleModal={toggleModal}
                    teamIndex={index}
                    curTeamName={team.name}
                />
            ) : null}
            {showPlayer ? (
                <PlayerScreen
                    team={team}
                    index={index}
                    showScreen={showPlayer}
                    toggleScreen={toggleShowPlayer}
                />
            ) : null}
            <View style={teamItemStyle.root}>
                <View style={teamItemStyle.playerUpperRow}>
                    <CircularImage src={playerImage} />
                    <View>
                        <Text style={teamItemStyle.name}> {team.name} </Text>
                        <Text style={teamItemStyle.playerCount}>
                            {' '}
                            Player Count: {team.players.length}{' '}
                        </Text>
                    </View>
                </View>
                <CustomButton
                    title={Strings.editTeamButton}
                    onPress={onEditTap}
                />
            </View>
        </Pressable>
    );
};

export default memo(TeamItem);
