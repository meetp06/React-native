import { FlatList, Text, View } from 'react-native';
import { CustomButton, CustomTextInput } from '../../components';
import styles from './HomePageStyles';
import { useHomePage } from './hooks';
import { RenderList } from './renderList';

const HomePage = () => {
  const {
    data,
    counter,
    handleAdd,
    handleIncrement,
    handleDecrement,
    handleEdit,
    todoText,
    setTodoText,
    clearAll,
    selectedIndex,
    setSelectedIndex,
  } = useHomePage();

  return (
    <View style={styles.root}>
      <View style={styles.todoRow}>
        <CustomTextInput
          placeholder='Enter todo task'
          value={todoText}
          onChangeText={(val: any) => setTodoText(val)}
          autoCorrect={false}
        />
        <CustomButton
          title={selectedIndex === -1 ? 'Add' : 'Save'}
          onPress={selectedIndex === -1 ? handleAdd : handleEdit}
        />
        <CustomButton
          title={'Clear All'}
          onPress={clearAll}
        />
      </View>
      <View style={styles.todoRow}>
        <Text>Counter - {counter}</Text>
        <CustomButton
          title={'Increment'}
          onPress={handleIncrement}
        />
        <CustomButton
          title={'Decrement'}
          onPress={handleDecrement}
        />
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <RenderList
            index={item.id}
            item={item}
            handleEdit={handleEdit}
            setTodoText={setTodoText}
            setSelectedIndex={setSelectedIndex}
          />
        )}
      />
    </View>
  );
};

export default HomePage;
