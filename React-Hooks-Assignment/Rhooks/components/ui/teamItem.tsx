import { Alert, Pressable, Text, View } from "react-native";
import CircularImage from "../utility/circularImage";
import CustomButton from "../utility/customButton";
import AddTeamModal from "./teamModal";
import { memo, useContext, useState } from "react";
import PlayerScreen from "./playerScreen";
import TeamItemStyle from "../styles/teamItem";
import TeamContext from "../hooks/Team/teamContext";
import ModalHook from "../hooks/Modal/modalHooks";
import { deleteTeam } from "../hooks/Team/teamFunctions";

//* Image location
const imgLocation = require('../../assets/icon.png');

//* Team item component
const TeamItem = ({ team, index }: any) => {

    //* States for showing player list modal and edit team name modal
    const { visibleModal: teamModal, toggleModal } = ModalHook();
    const [showPlayer, setShowPlayer] = useState(false);
    const { teamArray, setTeamArray } = useContext(TeamContext) as any;

    const toggle = () => {
        setShowPlayer(!showPlayer);
    }

    const onEditTap = () => {
        toggleModal();
    }

    const deleteCurTeam = () => {

        Alert.alert('Confirm', 'Do you want to delete current team?', [
            { 'text': 'Yes', 'onPress': () => { deleteTeam(index, teamArray, setTeamArray) } },
            { 'text': 'No' }
        ]);
    }

    return (
        <Pressable onLongPress={deleteCurTeam} delayLongPress={700}>

            {/* //* edit screen modal */}
            {teamModal && <AddTeamModal teamModal={teamModal} toggleModal={toggleModal} teamIndex={index} curTeamName={team.name} />}

            {/* //* player screen modal */}
            {showPlayer && <PlayerScreen team={team} index={index} showScreen={showPlayer} toggleScreen={toggle} />}

            <View style={TeamItemStyle.root}>

                <View style={TeamItemStyle.playerUpperRow}>

                    {/*  //* Image */}
                    <CircularImage src={imgLocation} />

                    <View>
                        {/*  //* col for name played matches and type of player */}
                        <Text style={TeamItemStyle.name} > {team.name} </Text>
                        <CustomButton children={'View players'} onPress={toggle} />
                    </View>

                </View>

                <CustomButton children={'Edit team name'} onPress={onEditTap} />
            </View>

        </Pressable >
    );
}

export default memo(TeamItem);