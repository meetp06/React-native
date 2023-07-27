import {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {TodoList} from '../../../components/todo-list';
import {add, clearItem} from '../../../redux/store/TodoSlice';
import styles from './HomeStyles';

// create a component
const Home = () => {
  const [text, setText] = useState('');
  const [isVisible, setVisible] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text.length === 0) {
      Alert.alert('Empty Todo', 'Write Somthing in Todo');
    } else {
      if (text.length >= 0) {
        dispatch(add({title: text}));
        setText('');
      }
    }
  };

  const handleClear = () => {
    dispatch(clearItem());
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headerText}>TODO APP</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.textInput}>
          <TextInput
            style={styles.placeholder}
            placeholder="Enter Todo"
            value={text}
            onChangeText={m => setText(m)}
          />
        </View>
        <View style={styles.add}>
          {isVisible ? (
            <Button title="Add" onPress={() => handleSubmit()} />
          ) : (
            <Button title="Save" onPress={() => {}} />
          )}
        </View>
      </View>
      <View style={styles.clearList}>
        <Button title="Clear List" onPress={() => handleClear()} />
      </View>
      <View style={styles.todoList}>
        <TodoList setText={setText} />
      </View>
    </View>
  );
};

//make this component available to the app
export default Home;
