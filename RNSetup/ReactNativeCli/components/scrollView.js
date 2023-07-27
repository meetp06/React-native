/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';

export default function ReactApp() {

  const [EnterText, ReceiveText] = useState('');
  const [lastGoal, setGoal] = useState([]);

  function InputText(puttedText) {
    ReceiveText(puttedText);
  }
  function ListText() {
    setGoal(CurrentText => [...CurrentText, EnterText]);
  }
  return (
    <View style={styles.MainPage}>
      <View style={styles.Title}>
        <Text style={{ color: 'black', fontSize: 25 }}>Tap Here!!</Text>
      </View>
      <View style={styles.InputAndButton}>
        <View style={styles.Input}>
          <TextInput
            style={{ fontSize: 16 }}
            placeholder="Add Goal.."
            onChangeText={InputText}
            selectionColor={'green'}
            onFocus =  { }
          />
        </View>
        <View style={styles.Button}>
          <Button title="Add" color="steelblue" onPress={ListText} />
        </View>
      </View>
      <View>
        <Text style={{ color: '#784521', fontSize: 21, marginLeft: 20 }}>
          🎯Goal List...
        </Text>
      </View>
      <ScrollView alwaysBounceVertical={false} style={styles.ListData}>
        {lastGoal.map((SingleGoal, Index) => (
          <View
            style={{
              borderWidth: 0.5,
              height: 40,
              margin: 5,
              borderRadius: 10,
              backgroundColor: '#faebd9',
            }}>
            <Text
              style={{
                fontSize: 18,
                padding: 8,
                borderWidth: 0.2,
              }}
              key={Index}>{`${Index + 1}: ${SingleGoal}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  MainPage: {
    flex: 1,
    backgroundColor: '#e6e6fa',
  },
  Title: {
    flex: 0,
    backgroundColor: '##ffffe0',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 25,
    padding: 10,
  },
  Input: {
    height: 40,
    width: 250,
    margin: 30,
    padding: 10,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
    justifyContent: 'space-between',
  },

  Button: {
    marginRight: 30,
    alignSelf: 'center',
  },
  InputAndButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ListData: {
    margin: 5,
  },
});
