import { useContext, useState } from "react";
import { Alert, KeyboardAvoidingView, Modal, Platform, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import TeamContext from "../hooks/Team/teamContext";
import { addTeamPlayer, updateTeamPlayer } from "../hooks/Team/teamFunctions";
import PlayerModalStyle from "../styles/playerModalStyle";
import CustomButton from "../utility/customButton";
import DropdownInput from "./dropDown";

//* our player modal which will work as add player and edit player

const PlayerModalView = ({ player, toggleModal, playerIndex, teamIndex }: any) => {

    //* All input state
    const [isEditClicked, setEditClicked] = useState(false);
    const showEdit = (isEditClicked || player?.fName) ? true : false;
    const isEdit = (isEditClicked || !player?.fName) ? true : false;

    const { teamArray, setTeamArray } = useContext(TeamContext) as any;

    const [fName, setFName] = useState(() => player?.fName ?? '');
    const [lName, setLName] = useState(() => player?.lName ?? '');
    const [age, setAge] = useState(() => player?.age ?? '');
    const [type, setType] = useState(() => player?.type ?? 'Select player type');
    const [nMatches, setNMatches] = useState(() => player?.nMatches ?? '');
    const [century, setCentury] = useState(() => player?.century ?? '');
    const [country, setCountry] = useState(() => player?.country ?? '');

    //* Validations on done clicked
    const doneHandler = () => {
        if (fName.length === 0) {
            Alert.alert('Error', 'Please enter first name.');
            return;
        }

        if (lName.length === 0) {
            Alert.alert('Error', 'Please enter last name.');
            return;
        }

        if (type === 'Select player type') {
            Alert.alert('Error', 'Please select player type.');
            return;
        }

        if (age.length === 0) {
            Alert.alert('Error', "Age can't be empty.");
            return;

        } else if (!Number(age) || Number(age) !== Math.floor(Number(age))) {
            Alert.alert('Error', 'Please enter correct age.');
            return;
        }

        if (nMatches.length === 0) {
            Alert.alert('Error', "Matches played can't be empty.");
            return;
        }

        else if ((!Number(nMatches) && Number(nMatches) !== 0) || (Number(nMatches) !== Math.floor(Number(nMatches)))) {
            Alert.alert('Error', 'Please enter correct matches played.');
            return;
        }

        if (century.length === 0) {
            Alert.alert('Error', "Century can't be empty.");
            return;
        }

        else if ((!Number(century) && Number(century) !== 0) || (Number(century) !== Math.floor(Number(century)))) {
            Alert.alert('Error', 'Please enter correct number of century.');
            return;
        }

        if (country.length === 0) {
            Alert.alert('Error', 'Please enter country name.');
            return;
        }

        const curPlayer = {
            fName: fName,
            lName: lName,
            type: type,
            age: Math.floor(Number(age)).toString(),
            nMatches: Math.floor(Number(nMatches)).toString(),
            century: Math.floor(Number(nMatches)).toString(),
            country: country,
        }

        //* depending on state push or edit accordingly

        if (!isEditClicked)
            addTeamPlayer(teamIndex, curPlayer, teamArray, setTeamArray);

        else
            updateTeamPlayer(teamIndex, playerIndex, curPlayer, teamArray, setTeamArray);

        toggleModal();
    }

    //* Cancel event clicked 
    const cancelHandler = () => {
        toggleModal();
    }

    return (
        <Modal
            animationType="none"
            supportedOrientations={['portrait']}
        >

            <SafeAreaView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? 'padding' : 'height'}>
                    <ScrollView style={{ flexGrow: 1 }}>
                        {/* //* Our scrollable input container */}
                        <View style={PlayerModalStyle.textContainer}>

                            <View style={PlayerModalStyle.upperHeader}>

                                <Text style={PlayerModalStyle.textHeader}>
                                    Player Information
                                </Text>

                                {(showEdit && !isEditClicked) &&
                                    <Pressable onPress={() => setEditClicked(true)}>
                                        <Text style={PlayerModalStyle.textEdit}> Edit </Text>
                                    </Pressable>
                                }

                            </View>

                            <TextInput
                                style={PlayerModalStyle.textInputStyle}
                                placeholder={'Enter first name'}
                                autoFocus={true}
                                value={fName}
                                editable={isEdit}
                                keyboardType="default"
                                onChangeText={(val) => { setFName(val) }}
                            />

                            <TextInput
                                style={PlayerModalStyle.textInputStyle}
                                placeholder={'Enter last name'}
                                value={lName}
                                editable={isEdit}
                                keyboardType="default"
                                onChangeText={(val) => { setLName(val) }}
                            />

                            <DropdownInput selectedValue={type} setSelectedValue={setType} isEdit={isEdit} />

                            <TextInput
                                style={PlayerModalStyle.textInputStyle}
                                placeholder={'Enter age'}
                                value={age}
                                editable={isEdit}
                                keyboardType="numeric"
                                onChangeText={(val) => { setAge(val) }}
                            />

                            <TextInput
                                style={PlayerModalStyle.textInputStyle}
                                placeholder={'Enter number of matches'}
                                value={nMatches}
                                editable={isEdit}
                                keyboardType="numeric"
                                onChangeText={(val) => { setNMatches(val) }}
                            />

                            <TextInput
                                style={PlayerModalStyle.textInputStyle}
                                placeholder={'Enter number of centuries'}
                                value={century}
                                editable={isEdit}
                                keyboardType="numeric"
                                onChangeText={(val) => { setCentury(val) }}
                            />

                            <TextInput
                                style={PlayerModalStyle.textInputStyle}
                                placeholder={'Enter country'}
                                value={country}
                                editable={isEdit}
                                keyboardType="default"
                                onChangeText={(val) => { setCountry(val) }}
                            />

                            {isEdit && <CustomButton children={'Done'} onPress={doneHandler} />}
                            <CustomButton children={'Cancel'} onPress={cancelHandler} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>

        </Modal >
    );
}

export default PlayerModalView;