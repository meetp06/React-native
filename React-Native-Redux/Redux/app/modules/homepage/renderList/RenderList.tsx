import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton } from '../../../components';
import { deleteTodo } from '../../../redux';
import styles from './RenderListStyles';

const RenderList = ({ index, item }: any) => {
    const reduxDispatch = useDispatch();

    const todo = useSelector((state: any) => {
        return state.todo.todoList[index];
    });

    const onDelete = () => {
        reduxDispatch(deleteTodo(index));
    };

    return (
        <View style={styles.box}>
            <Text>{todo.todoData.title}</Text>
            <CustomButton
                title={'Delete'}
                onPress={onDelete}
            />
        </View>
    );
};

export default RenderList;
