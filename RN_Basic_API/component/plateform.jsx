import React from "react";
import { Text,Platform, StyleSheet } from "react-native";

const OSInformation = () => {
    return (
        <>
            <Text>OS Type</Text>
            <Text style={styles.value}>{Platform.OS}</Text>
            <Text style={styles.value}>{Platform.Version}</Text>
            {Platform.OS === "android" ? <Text>Hello android</Text> : <Text>hello ios</Text>}
            <Text style={styles.value}>{Platform.isTV.toString()}</Text>
            <Text style={styles.value}>{Platform.isPad.toString()}</Text> 
            <Text style={styles.value}>{Platform.constants.Serial}</Text>
            <Text style={styles.value}>{Platform.constants.Fingerprint}</Text>
        </>
    )
}

const styles =StyleSheet.create({
    value: {
        fontWeight: '600',
        padding: 4,
        marginBottom: 8,
    },
})
export default OSInformation;