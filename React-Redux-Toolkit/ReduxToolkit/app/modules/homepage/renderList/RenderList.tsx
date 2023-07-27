import { memo, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { CustomButton } from '../../../components';
import { TodoActions } from '../../../redux';
import styles from './RenderListStyles';

const RenderList = ({ index, item, setTodoText, setSelectedIndex }: any) => {
  const reduxDispatch = useDispatch();

  const onDelete = useCallback(() => {
    reduxDispatch(TodoActions.deleteTodo(index));
  }, []);

  const performEdit = () => {
    setTodoText(item.title);
    setSelectedIndex(index);
  };

  return (
    <View style={styles.box}>
      <Text>{item.title}</Text>
      <View style={styles.buttonRow}>
        <CustomButton
          title={'Delete'}
          onPress={onDelete}
        />
        <CustomButton
          title={'Edit'}
          onPress={performEdit}
        />
      </View>
    </View>
  );
};

export default memo(RenderList);
