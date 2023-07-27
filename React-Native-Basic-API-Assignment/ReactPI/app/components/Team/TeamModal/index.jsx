/*
 * Team modal component.
 *
 * @param teamModal - boolean which shows the visibility of the modal.
 * @param toggleModal - function which toggles the visibility.
 * @param teamIndex - index of the team.
 * @param curTeamName - name of the current team.
 * @return modal for adding and editing the team name.
 */

import { useCallback, useContext, useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable,
    TextInput,
    View,
} from 'react-native';
import Strings from '../../../constants/Strings';
import TeamContext from '../../Hooks/Team/TeamContext';
import { updateTeam, addTeam } from '../../Hooks/Team/TeamFunctions';
import CustomButton from '../../CustomButton';
import teamModalStyle from './TeamModalStyle';

const AddTeamModal = ({ teamModal, toggleModal, teamIndex, curTeamName }) => {
    const { teamArray, setTeamArray } = useContext(TeamContext);

    //* For our input
    const [teamName, setTeamName] = useState(() => curTeamName ?? '');
    const placeHolder =
        teamIndex !== undefined ? Strings.editTeam : Strings.addTeam;

    //* On done button click
    const doneHandler = useCallback(() => {
        if (teamName.trim().length === 0) {
            Alert.alert(Strings.errorTitle, `Team name can't be empty`);
            return;
        }

        //* depending on edit or add do corresponding task
        teamIndex !== undefined
            ? updateTeam(teamIndex, teamName.trim(), teamArray, setTeamArray)
            : addTeam(teamName.trim(), teamArray, setTeamArray);
        toggleModal();
    }, [teamName]);

    const cancelHandler = useCallback(() => {
        toggleModal();
    }, []);

    return (
        <Modal
            visible={teamModal}
            transparent={true}
            supportedOrientations={['portrait']}>
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <Pressable
                    style={teamModalStyle.overlay}
                    onPress={() => toggleModal()}>
                    <View style={teamModalStyle.textContainer}>
                        <TextInput
                            style={teamModalStyle.textInputStyle}
                            placeholder={placeHolder}
                            value={teamName}
                            autoCorrect={false}
                            autoFocus={true}
                            maxLength={15}
                            textAlign={
                                Platform.OS === 'android' ? 'left' : 'center'
                            }
                            onChangeText={(val) => setTeamName(val)}
                        />
                        <CustomButton
                            title={Strings.doneButton}
                            onPress={doneHandler}
                        />
                        <CustomButton
                            title={Strings.cancelButton}
                            onPress={cancelHandler}
                        />
                    </View>
                </Pressable>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default AddTeamModal;
