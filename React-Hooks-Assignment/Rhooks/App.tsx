import { SafeAreaView, View } from 'react-native'
import TeamContext from './components/hooks/Team/teamContext';
import TeamHook from './components/hooks/Team/teamHook';
import AppStyle from './components/styles/appStyle';
import MainAppBody from './components/ui/mainAppBody';
import MainAppHeader from './components/ui/mainAppHeader';

//* Main App component

const App = () => {

    //* Global State
    const { teamArray, setTeamArray } = TeamHook();

    return (
        <View style={AppStyle.mainView}>

            {/* //* Wrapping With provider to catch global Array down the tree */}
            <TeamContext.Provider value={{ teamArray, setTeamArray } as never}>

                <SafeAreaView style={{ flex: 1 }}>

                    {/* //* Header Componenet */}
                    <MainAppHeader />

                    {/* //* Body Componenet */}
                    <MainAppBody />

                </SafeAreaView>

            </TeamContext.Provider>

        </View>
    );
};


export default App;