import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import PlayerHeaderStyle from '../styles/playerHeaderStyle';
import CircularImage from '../utility/circularImage';
import CustomButton from '../utility/customButton';
import PlayerModalView from './playerModal';

//* Our imageSource for back button
const backLocation = require('../../assets/back.png');

//* Player Header component which will be see on view player modal
const PlayerHeader = ({ teamName, teamIndex, backToggle }: any) => {

    //* State for showing modal on Add player click
    const [showAddPlayer, setAddPlayer] = useState(false);

    //* Toggle for Add player modal
    const toggle = () => {
        setAddPlayer(!showAddPlayer);
    }

    return (
        <View style={PlayerHeaderStyle.mainView}>

            {/* //* Holding back button and Team name */}
            <View style={PlayerHeaderStyle.backPortion}>
                <Pressable onPress={backToggle}>
                    <CircularImage src={backLocation} />
                </Pressable>

                <Text style={PlayerHeaderStyle.headerTextStyle}>
                    {teamName}
                </Text>
            </View>

            {/* //* Player modal view */}
            {showAddPlayer && <PlayerModalView toggleModal={toggle} teamIndex={teamIndex} />}

            {/* //* Button for add player */}
            <CustomButton children={'Add Player'} onPress={toggle} />

        </View>
    );
};

export default PlayerHeader;