/*
 * Player Modal component.
 *
 * @param player - object having player info.
 * @param toggleModal - function which will close the modal.
 * @param playerIndex - index of the current player.
 * @param teamIndex - index of the current team.
 * @return screen having all player details for edit and add purpose.
 */

import { useCallback, useContext, useState, memo } from 'react';
import {
    KeyboardAvoidingView,
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import validateInput from '../../../utility/ValidateInput';
import PlayerType from '../../../constants/PlayerType';
import Strings from '../../../constants/Strings';
import TeamContext from '../../Hooks/Team/TeamContext';
import useModalHook from '../../Hooks/UseModal';
import {
    addTeamPlayer,
    updateTeamPlayer,
} from '../../Hooks/Team/TeamFunctions';
import CustomButton from '../../CustomButton';
import DropdownInput from '../../Dropdown';
import playerModalStyle from './PlayerModalStyle';

const phoneRegex = new RegExp('^[0-9]{10}$');

const PlayerModalView = ({ player, toggleModal, playerIndex, teamIndex }) => {
    //* All input state
    const [isEditClicked, toggleEditClicked] = useModalHook();
    const showEdit = isEditClicked || player?.fName ? true : false;
    const isEdit = isEditClicked || !player?.fName ? true : false;

    const { teamArray, setTeamArray } = useContext(TeamContext);

    const [fName, setFName] = useState(() => player?.fName ?? '');
    const [lName, setLName] = useState(() => player?.lName ?? '');
    const [age, setAge] = useState(() => player?.age ?? '');
    const [phone, setPhone] = useState(() => player?.phone ?? '');
    const [type, setType] = useState(() => ({
        value: player?.type ?? 'Select player type',
        index: -1,
    }));
    const [nMatches, setNMatches] = useState(() => player?.nMatches ?? '');
    const [century, setCentury] = useState(() => player?.century ?? '');
    const [country, setCountry] = useState(() => player?.country ?? '');

    //* Validations on done clicked
    const doneHandler = () => {
        if (
            !validateInput(
                fName,
                lName,
                type,
                age,
                phone,
                phoneRegex,
                nMatches,
                century,
                country
            )
        )
            return;

        const curPlayer = {
            fName: fName.trim(),
            lName: lName.trim(),
            type: type.value,
            age: Math.floor(Number(age)).toString(),
            phone: phone,
            nMatches: Math.floor(Number(nMatches)).toString(),
            century: Math.floor(Number(century)).toString(),
            country: country.trim(),
        };

        //* depending on state push or edit accordingly

        if (!isEditClicked)
            addTeamPlayer(teamIndex, curPlayer, teamArray, setTeamArray);
        else
            updateTeamPlayer(
                teamIndex,
                playerIndex,
                curPlayer,
                teamArray,
                setTeamArray
            );

        toggleModal();
    };

    //* Cancel event clicked
    const cancelHandler = useCallback(() => {
        toggleModal();
    }, []);

    return (
        <Modal supportedOrientations={['portrait']}>
            <SafeAreaView>
                <KeyboardAvoidingView behavior={'height'}>
                    <ScrollView
                        style={{ flexGrow: 1 }}
                        alwaysBounceVertical={false}>
                        <View style={playerModalStyle.textContainer}>
                            <View style={playerModalStyle.upperHeader}>
                                <Text style={playerModalStyle.textHeader}>
                                    Player Information
                                </Text>

                                {showEdit && !isEditClicked ? (
                                    <Pressable onPress={toggleEditClicked}>
                                        <Text style={playerModalStyle.textEdit}>
                                            {' '}
                                            Edit{' '}
                                        </Text>
                                    </Pressable>
                                ) : null}
                            </View>
                            <TextInput
                                style={playerModalStyle.textInputStyle}
                                placeholder={'Enter first name'}
                                autoFocus={true}
                                value={fName}
                                editable={isEdit}
                                autoCorrect={false}
                                maxLength={8}
                                keyboardType='default'
                                onChangeText={(val) => {
                                    setFName(val);
                                }}
                            />
                            <TextInput
                                style={playerModalStyle.textInputStyle}
                                placeholder={'Enter last name'}
                                value={lName}
                                editable={isEdit}
                                autoCorrect={false}
                                maxLength={8}
                                keyboardType='default'
                                onChangeText={(val) => {
                                    setLName(val);
                                }}
                            />
                            <DropdownInput
                                selectedValue={type}
                                setSelectedValue={setType}
                                isEdit={isEdit}
                                listOfOptions={PlayerType}
                            />
                            <TextInput
                                style={playerModalStyle.textInputStyle}
                                placeholder={'Enter age'}
                                value={age}
                                editable={isEdit}
                                keyboardType='numeric'
                                onChangeText={(val) => {
                                    setAge(val);
                                }}
                            />
                            <TextInput
                                style={playerModalStyle.textInputStyle}
                                placeholder={'Enter phone number'}
                                value={phone}
                                editable={isEdit}
                                keyboardType='phone-pad'
                                onChangeText={(val) => {
                                    setPhone(val);
                                }}
                            />
                            <TextInput
                                style={playerModalStyle.textInputStyle}
                                placeholder={'Enter number of matches'}
                                value={nMatches}
                                editable={isEdit}
                                keyboardType='numeric'
                                onChangeText={(val) => {
                                    setNMatches(val);
                                }}
                            />
                            <TextInput
                                style={playerModalStyle.textInputStyle}
                                placeholder={'Enter number of centuries'}
                                value={century}
                                editable={isEdit}
                                keyboardType='numeric'
                                onChangeText={(val) => {
                                    setCentury(val);
                                }}
                            />
                            <TextInput
                                style={playerModalStyle.textInputStyle}
                                placeholder={'Enter country'}
                                value={country}
                                editable={isEdit}
                                autoCorrect={false}
                                keyboardType='default'
                                onChangeText={(val) => {
                                    setCountry(val);
                                }}
                            />
                            {isEdit ? (
                                <CustomButton
                                    title={Strings.doneButton}
                                    onPress={doneHandler}
                                />
                            ) : null}
                            <CustomButton
                                title={Strings.cancelButton}
                                onPress={cancelHandler}
                            />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </Modal>
    );
};

export default memo(PlayerModalView);
