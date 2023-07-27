/*
 * App component
 *
 * @params none.
 * @return main app screen consisting of header, team list body and footer.
 */

import { useEffect, useState } from 'react';
import { BackHandler, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './app/components/LoadingScreen';
import MainAppFooter from './app/components/MainApp/MainAppFooter';
import MainAppHeader from './app/components/MainApp/MainAppHeader';
import Strings from './app/constants/Strings';
import TeamContext from './app/components/Hooks/Team/TeamContext';
import TeamHook from './app/components/Hooks/Team/TeamHook';
import TeamListBody from './app/components/Team/TeamListBody';
import appStyle from './app/components/MainApp/AppStyle';
import backPressHandler from './app/utility/BackPressHandler';

const App = () => {
    //* Global State
    const { teamArray, setTeamArray } = TeamHook();
    const [isLoading, toggleIsLoading] = useState(true);

    //* Subscribe to BackHandler and fetch data from Async storage
    useEffect(() => {
        const backPressSubscriber = BackHandler.addEventListener(
            'hardwareBackPress',
            backPressHandler
        );

        (async () => {
            const localArray = await AsyncStorage.getItem(Strings.arrayKey);

            if (localArray) setTeamArray(JSON.parse(localArray));

            setTimeout(() => {
                toggleIsLoading(false);
            }, 1500);
        })();

        return () => backPressSubscriber.remove();
    }, []);

    return (
        <SafeAreaView style={appStyle.flex}>
            <TeamContext.Provider value={{ teamArray, setTeamArray }}>
                <MainAppHeader />
                {isLoading ? (
                    <LoadingScreen textInfo={Strings.loadingMSG} />
                ) : null}
                {!isLoading ? <TeamListBody /> : null}
                <MainAppFooter />
            </TeamContext.Provider>
        </SafeAreaView>
    );
};

export default App;
