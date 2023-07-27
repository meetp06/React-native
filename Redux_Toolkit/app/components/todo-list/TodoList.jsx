import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import ListItem from '../list-item/ListItem';
import styles from './TodoListStyles';

const TodoList = ({ setText }) => {
  const todos = useSelector(state => state.todo.todoList);
  return (
    <View>
      <FlatList
        style={styles.flatList}
        data={todos}
        keyExtractor={item => Math.random(item)}
        renderItem={({ item, index }) => (
          <ListItem title={item.title} index={index} setText={setText} />
        )}
      />
    </View>
  );
};

export default TodoList;
