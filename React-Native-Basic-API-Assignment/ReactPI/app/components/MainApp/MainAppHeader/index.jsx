/*
 * Main App header component having app name, counter and add team button.
 *
 * @params none.
 * @return main app screen consisting of header, body and footer.
 */

import {
    memo,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Alert, AppState, Text, View } from 'react-native';
import Strings from '../../../constants/Strings';
import TeamContext from '../../Hooks/Team/TeamContext';
import useModalHook from '../../Hooks/UseModal';
import CustomButton from '../../CustomButton';
import AddPlayerModal from '../../Player/AddPlayerModal';
import AddTeamModal from '../../Team/TeamModal';
import mainAppHeaderStyle from './MainAppHeaderStyle';

const MainAppHeader = () => {
    const { teamArray } = useContext(TeamContext);

    //* States for our add Player modal show
    const [teamModal, toggleModal] = useModalHook();
    const [showAddPlayer, toggleAddPlayer] = useModalHook();

    //* For appstate
    const appState = useRef(AppState.currentState);
    const [openCount, setOpenCount] = useState(0);

    //* Adding a event listener for App state change
    useEffect(() => {
        const subscriber = AppState.addEventListener(
            'change',
            (nextAppState) => {
                if (
                    appState.current.match(/inactive|background/) &&
                    nextAppState === 'active'
                )
                    setOpenCount((prevCount) => prevCount + 1);

                appState.current = nextAppState;
            }
        );

        return () => subscriber.remove();
    }, []);

    //* onPress for add button
    const add = useCallback(() => {
        toggleModal();
    }, []);

    const onAddPlayer = useCallback(() => {
        if (teamArray.length === 0) {
            Alert.alert(Strings.errorTitle, 'Please make a team first..');
            return;
        }

        toggleAddPlayer();
    }, [teamArray]);

    return (
        <View style={mainAppHeaderStyle.mainView}>
            <CustomButton
                title={'Add Team'}
                onPress={add}
            />
            <View style={mainAppHeaderStyle.countContainer}>
                <Text style={mainAppHeaderStyle.headerTextStyle}>
                    {openCount}
                </Text>
            </View>
            {teamModal ? (
                <AddTeamModal
                    teamModal={teamModal}
                    toggleModal={toggleModal}
                />
            ) : null}
            {showAddPlayer ? (
                <AddPlayerModal
                    isVisible={showAddPlayer}
                    toggleVisible={toggleAddPlayer}
                />
            ) : null}
            <CustomButton
                title={'Add Player'}
                onPress={onAddPlayer}
            />
        </View>
    );
};

export default memo(MainAppHeader);
