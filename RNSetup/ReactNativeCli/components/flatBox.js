import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, TextInput, Button, Pressable, Modal } from 'react-native';

export default function listDataItem() {
  const [EnterText, ReceiveText] = useState('');
  const [lastGoal, setGoal] = useState([]);

  function InputText(puttedText) {
    ReceiveText(puttedText);
  }
  function ListText() {
    setGoal(CurrentText => [...CurrentText]);
  }
  function DeleteGoal(id) {
    setGoal((CurrentText) => { return CurrentText.filter((_, index) => index !== id) })

  }
  return (
    <Modal>
      <View style={styles.MainPage}>
        <Pressable onPress={() => console.log("You Taped Here!")}>
          <View style={styles.Title}>
            <Text style={{ color: 'black', fontSize: 25, backgroundColor: '#7892', borderRadius: 5, height: 40, width: 110, padding: 4, marginLeft: 4 }}>Tap Here!!</Text>
          </View>
        </Pressable>

        <View style={styles.InputAndButton}>

          <View style={styles.Input}>
            <TextInput
              style={{ fontSize: 16 }}
              placeholder="Add Goal.."
              onChangeText={InputText}
              selectionColor={'green'} />
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

        <FlatList data={lastGoal} style={styles.ListData}
          renderItem={({item , index}) => {
            return (
              <Pressable onPress={DeleteGoal.bind(this, item)}>
                <View
                  style={{
                    borderWidth: 0.5,
                    height: 40,
                    margin: 5,
                    borderRadius: 10,
                    backgroundColor: '#65418955',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      padding: 8,
                      borderWidth: 0.2,
                    }}> {index + 1}: {item}
                  </Text>
                </View>
              </Pressable>
            );
          }}
          alwaysBounceVertical={false} />
      </View>
    </Modal>
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
})
