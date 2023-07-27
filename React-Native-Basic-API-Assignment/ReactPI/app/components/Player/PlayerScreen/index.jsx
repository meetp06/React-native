/*
 * Player Screen component.
 *
 * @param showScreen - for the visiblity of the modal.
 * @param toggleScreen - function which will update the visibility of the modal.
 * @param team - object consisting the name and team players array.
 * @param index - index of the current team.
 * @return modal screen having header and body.
 */

import { Modal, SafeAreaView, View } from 'react-native';
import PlayerListBody from '../PlayerListBody';
import PlayerHeader from '../PlayerHeader';
import playerScreenStyle from './PlayerScreenStyle';

const PlayerScreen = ({ showScreen, toggleScreen, team, index }) => {
    return (
        <View style={playerScreenStyle.flex}>
            <Modal visible={showScreen}>
                <SafeAreaView style={playerScreenStyle.flex}>
                    <PlayerHeader
                        teamName={team.name}
                        teamIndex={index}
                        backToggle={toggleScreen}
                    />
                    <PlayerListBody
                        team={team}
                        teamIndex={index}
                    />
                </SafeAreaView>
            </Modal>
        </View>
    );
};

export default PlayerScreen;
