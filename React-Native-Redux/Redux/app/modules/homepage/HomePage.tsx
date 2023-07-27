import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton, CustomTextInput } from '../../components';
import {
    addTodo,
    decrementCounterAction,
    incrementCounterAction,
} from '../../redux';
import { RenderList } from './renderList';

const HomePage = () => {
    const reduxDispatch = useDispatch();
    const data = useSelector((state) => state.todo.todoList);
    const counter = useSelector((state) => state.counter.counter);

    const [todoText, setTodoText] = useState('');

    const handleAdd = () => {
        if (!todoText) return;
        reduxDispatch(addTodo({ title: todoText }));
        setTodoText('');
    };

    const handleIncrement = () => {
        reduxDispatch(incrementCounterAction(5));
    };

    const handleDecrement = () => {
        reduxDispatch(decrementCounterAction());
    };

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
                    title={'Add'}
                    onPress={handleAdd}
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
                        index={index}
                        item={item}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },

    todoRow: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },

    textStyle: {
        textAlign: 'center',
    },
});

export default HomePage;
