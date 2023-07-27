import { Button, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import GoalComp from './components/goalItem';
import UpperSection from './components/upperSection';
import ListEmpty from './components/listEmpty';

export default function App() {

  const [goalArray, functionToAddGoal] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  function setOnPressModal(params: any) {
    setModalVisible(true);
  }

  function unSetOnPressModal(params: any) {
    setModalVisible(false);
  }

  function onCustomPress(inputValue: any) {
    functionToAddGoal((cGoals) => [...cGoals, inputValue as never]);
  }

  function onDeleteHandler(params: any) {
    functionToAddGoal((cGoals) => cGoals.filter((_, index) => index != params));
  }

  return (
    <View style={styles.container}>

      <View>
        <Button
          title='Add New Goal'
          color={'#5e0acc'}
          onPress={setOnPressModal}
        />
      </View>

      {
        isModalVisible && <UpperSection
          onCustomPress={onCustomPress} i
          sVisible={isModalVisible}
          onCancel={unSetOnPressModal} />
      }

      <FlatList
        ListEmptyComponent={ListEmpty}
        style={styles.listOfGoals}
        contentContainerStyle={goalArray.length === 0 && { flexGrow: 1 }}
        data={goalArray}
        renderItem={({ item, index }) => <GoalComp
          item={item}
          index={index}
          onDelete={onDeleteHandler}
        />}
      />

    </View >
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 10,
  },

  listOfGoals: {
    marginTop: 15,
  },
});
