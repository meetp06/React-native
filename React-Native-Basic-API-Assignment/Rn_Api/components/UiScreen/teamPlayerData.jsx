import React from "react";
import { Modal, SafeAreaView, Text, View } from "react-native";

const TeamPlayerData = () => {
    return (
        <View>
            <Modal visible={true}>
                <SafeAreaView>
                    <Text>Player List</Text>
                </SafeAreaView>
            </Modal>
        </View>
    )
}

export default TeamPlayerData;