import { useContext, useState } from "react";
import { Alert, KeyboardAvoidingView, Modal, Platform, Pressable, TextInput, View } from "react-native";
import ConstString from "../../constants/constString";
import TeamContext from "../hooks/Team/teamContext";
import { updateTeam, addTeam } from "../hooks/Team/teamFunctions";
import TeamModalStyle from "../styles/teamModalStyle";
import CustomButton from "../utility/customButton";


//* Add team modal

const AddTeamModal = ({ teamModal, toggleModal, teamIndex, curTeamName }: any) => {

    const { teamArray, setTeamArray } = useContext(TeamContext) as any;

    //* For our input 
    const [teamName, setTeamName] = useState(() => (curTeamName ?? ''));
    const placeHolder = teamIndex !== undefined ? ConstString["Edit Team"] : ConstString["Add Team"];

    //* On done button click
    const doneHandler = () => {

        if (teamName.trim().length === 0) {
            Alert.alert('Error', `Team name can't be empty`);
            return;
        }

        //* depending on edit or add do corresponding task
        teamIndex !== undefined ? updateTeam(teamIndex, teamName.trim(), teamArray, setTeamArray) : addTeam(teamName.trim(), teamArray, setTeamArray);
        toggleModal();
    }

    const cancelHandler = () => {
        toggleModal();
    }

    return (
        <Modal
            visible={teamModal}
            transparent={true}
            supportedOrientations={['portrait']}
        >
            <KeyboardAvoidingView style={{ flex: 1, }}>
                <Pressable style={TeamModalStyle.overlay} onPress={() => toggleModal()}>

                    {/* //* Textinput with button holding view */}
                    <View style={TeamModalStyle.textContainer}>
                        <TextInput
                            style={TeamModalStyle.textInputStyle}
                            placeholder={placeHolder}
                            value={teamName}
                            autoFocus={true}
                            textAlign={Platform.OS === 'android' ? 'left' : 'center'}
                            onChangeText={(val) => setTeamName(val)}
                        />

                        <CustomButton children={'Done'} onPress={doneHandler} />
                        <CustomButton children={'Cancel'} onPress={cancelHandler} />
                    </View>

                </Pressable>
            </KeyboardAvoidingView>

        </Modal >
    );
}

export default AddTeamModal;