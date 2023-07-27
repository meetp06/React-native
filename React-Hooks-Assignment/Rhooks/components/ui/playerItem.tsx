import { useContext } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import ModalHook from "../hooks/Modal/modalHooks";
import TeamContext from "../hooks/Team/teamContext";
import { deleteTeamPlayer } from "../hooks/Team/teamFunctions";
import PlayerItemStyle from "../styles/playerItemStyle";
import CircularImage from "../utility/circularImage";
import CustomButton from "../utility/customButton";
import PlayerModalView from "./playerModal";

//* image location 
const imgLocation = require('../../assets/icon.png');

//* Player item component for each player in team
const PlayerItem = ({ player, index, teamIndex }: any) => {

    //* State for edit player modal on tapping the card
    const { visibleModal: playerModal, toggleModal: togglePlayerModal } = ModalHook();
    const { teamArray, setTeamArray } = useContext(TeamContext) as any;

    //* on long press delete player
    const deletePlayer = () => {

        Alert.alert('Confirm', 'Do you want to delete current player?', [
            {
                'text': 'Yes', 'onPress': () => {
                    deleteTeamPlayer(teamIndex, index, teamArray, setTeamArray)
                }
            },

            { 'text': 'No' }
        ]);
    }

    return (

        <Pressable onPress={togglePlayerModal} onLongPress={deletePlayer} delayLongPress={700}>

            <View style={PlayerItemStyle.root}>

                {/* //* Holding Team icon name and player type */}
                <View style={PlayerItemStyle.playerUpperRow}>

                    {/*  //* Image */}
                    <CircularImage src={imgLocation} />

                    {playerModal && <PlayerModalView player={player} toggleModal={togglePlayerModal} playerIndex={index} teamIndex={teamIndex} />}

                    {/*  //* Name plus type in column */}
                    <View>
                        {/*  //* col for name played matches and type of player */}
                        <Text style={PlayerItemStyle.name} > {player.fName + ' ' + player.lName} </Text>
                        <Text style={PlayerItemStyle.playerType}> {player.type} </Text>

                    </View>

                    <CustomButton children={'View player'} onPress={togglePlayerModal} />

                </View>

                {/* //* Holding 4stats of player */}
                <View style={PlayerItemStyle.playerLowerRow}>

                    <View style={PlayerItemStyle.playerStatContainer}>
                        <Text style={PlayerItemStyle.statType}> Matches </Text>
                        <Text style={PlayerItemStyle.statValue}> {player.nMatches} </Text>
                    </View>

                    <View style={PlayerItemStyle.playerStatContainer}>
                        <Text style={PlayerItemStyle.statType}> Age </Text>
                        <Text style={PlayerItemStyle.statValue}> {player.age} </Text>
                    </View>

                    <View style={PlayerItemStyle.playerStatContainer}>
                        <Text style={PlayerItemStyle.statType}> Centuries </Text>
                        <Text style={PlayerItemStyle.statValue}> {player.century} </Text>
                    </View>

                    <View style={PlayerItemStyle.playerStatContainer}>
                        <Text style={PlayerItemStyle.statType}> Country </Text>
                        <Text style={PlayerItemStyle.statValue}> {player.country} </Text>
                    </View>

                </View>

            </View>

        </Pressable >
    );
}

export default PlayerItem;