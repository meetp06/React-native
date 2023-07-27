/*
 * Add Player Modal Component.
 *
 * @param isVisible - for visibility of modal.
 * @param toggleVisible - for toggling the visibility of modal.
 * @return modal having an option for selecting the particular team
 * in which the player has to be added.
 */

import { useCallback, useContext, useState } from 'react';
import {
    Alert,
    Modal,
    Pressable,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import Strings from '../../../constants/Strings';
import { backButtonImage } from '../../../constants/ImagesLocation';
import playerHeaderStyle from '../PlayerHeader/PlayerHeaderStyle';
import addPlayerModalStyle from './AddPlayerModalStyle';
import CircularImage from '../../CircularImage';
import TeamContext from '../../Hooks/Team/TeamContext';
import useModalHook from '../../Hooks/UseModal';
import CustomButton from '../../CustomButton';
import PlayerModalView from '../PlayerModal';
import DropdownInput from '../../Dropdown';

const AddPlayerModal = ({ isVisible, toggleVisible }) => {
    const { teamArray } = useContext(TeamContext);

    const [selectedValue, setSelectedValue] = useState(() => ({
        value: 'Select team in which you want to add',
        index: -1,
    }));

    //* State for showing modal on Add player click
    const [showAddPlayer, toggleAddPlayer] = useModalHook();

    const onAdd = useCallback(() => {
        if (selectedValue.index === -1) {
            Alert.alert(Strings.errorTitle, 'Please select a team first..');
            return;
        }

        toggleAddPlayer();
    }, [selectedValue.index]);

    return (
        <Modal visible={isVisible}>
            <SafeAreaView style={addPlayerModalStyle.flex}>
                {showAddPlayer ? (
                    <PlayerModalView
                        toggleModal={toggleAddPlayer}
                        teamIndex={selectedValue.index}
                    />
                ) : null}
                <View style={playerHeaderStyle.backPortion}>
                    <Pressable onPress={toggleVisible}>
                        <CircularImage src={backButtonImage} />
                    </Pressable>
                    <Text style={playerHeaderStyle.headerTextStyle}>
                        Add player
                    </Text>
                </View>
                <View style={addPlayerModalStyle.flex}>
                    <DropdownInput
                        selectedValue={selectedValue}
                        setSelectedValue={setSelectedValue}
                        listOfOptions={teamArray}
                        isEdit={true}
                        scrollEnabled={true}
                    />
                </View>
                <View style={addPlayerModalStyle.bottomButton}>
                    <CustomButton
                        title={Strings.continueButton}
                        onPress={onAdd}
                    />
                </View>
            </SafeAreaView>
        </Modal>
    );
};

export default AddPlayerModal;
