/*
 * Player Header component.
 *
 * @params teamName.
 * @params teamIndex.
 * @params backToggle - a function which is used for going back to team list.
 * @return header of the player screen having team name.
 */

import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { backButtonImage } from '../../../constants/ImagesLocation';
import CircularImage from '../../CircularImage';
import PlayerModalView from '../PlayerModal';
import playerHeaderStyle from './PlayerHeaderStyle';

const PlayerHeader = ({ teamName, teamIndex, backToggle }) => {
    //* State for showing modal on Add player click
    const [showAddPlayer, toggleAddPlayer] = useState(false);

    return (
        <View style={playerHeaderStyle.mainView}>
            <View style={playerHeaderStyle.backPortion}>
                <Pressable onPress={backToggle}>
                    <CircularImage src={backButtonImage} />
                </Pressable>
                <Text style={playerHeaderStyle.headerTextStyle}>
                    {teamName}
                </Text>
            </View>
            {showAddPlayer ? (
                <PlayerModalView
                    toggleModal={toggleAddPlayer}
                    teamIndex={teamIndex}
                />
            ) : null}
        </View>
    );
};

export default PlayerHeader;
