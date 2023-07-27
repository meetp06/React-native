import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

const alertFunction = () => {
Alert.alert("close box","if you want to close this box press cancel",[{

  text:'C A N C E L',
  style:'destructive',
  

  //*prompt only used in ios
  onPress:()=>{Alert.prompt("are you sure","type somthing")}
}],{
  //* cancelable only used in android
    cancelable:true,
    onDismiss:()=>{Alert.alert("dismiss")}
})
}

const createThreeButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Ask me later',
      
      onPress: () => console.log('Ask me later pressed'),
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'destructive',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);

const ShowAlert = () => {
  return (
    <View style={styles.button}>
      <Button title='Alert' onPress={createThreeButtonAlert} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    marginBottom: 15,
  }
})

export default ShowAlert;