import { Modal, SafeAreaView, View } from "react-native";
import PlayerBody from "./playerBody";
import PlayerHeader from "./playerHeader";

//* Modal containing player screen 
const PlayerScreen = ({ showScreen, toggleScreen, team, index }: any) => {
    return (
        <View style={{ flex: 1 }}>
            <Modal
                visible={showScreen}
            >
                <SafeAreaView style={{ flex: 1, }}>
                    {/* //* player screen header */}
                    <PlayerHeader teamName={team.name} teamIndex={index} backToggle={toggleScreen} />
                    {/* //* player screen body */}
                    <PlayerBody team={team} index={index} />
                </SafeAreaView>

            </Modal>
        </View>
    );
}

export default PlayerScreen;