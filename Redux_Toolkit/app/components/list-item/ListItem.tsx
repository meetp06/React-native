import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {remove} from '../../redux/store/TodoSlice';
import styles from './ListItemStyle';

// create a component
const ListItem = ({title, index, setText}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(remove(index));
  };

  const handleEdit = () => {
    setText(title);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Button title="Delete" onPress={() => handleDelete()} />
        <Button title="Edit" onPress={() => handleEdit()} />
      </View>
    </View>
  );
};

//make this component available to the app
export default ListItem;
