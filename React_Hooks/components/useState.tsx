import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

function UseStateFunction() {
  const [currentState, setcurrentState] = useState(1);
  function condition() {
    if (currentState == 0) {
      Alert.alert('This is Last Number.')
    } else {
      return currentState
    }
  }
  return (

    <View style={styles.buttonStyle}>

      <Button title="Decrease" onPress={() => setcurrentState((prevState) => {
        console.log(prevState)
        return prevState - 1
        })} />
      <Text style={{ fontSize: 40, marginRight: 15, marginLeft: 15, }}>{condition()}</Text>
      <Button title="Increase" onPress={() => setcurrentState(currentState + 1)} />

    </View>
  )
}

const styles = StyleSheet.create({

  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    color: 'blue',
  }
})

export default UseStateFunction;