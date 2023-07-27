import { nanoid } from '@reduxjs/toolkit';
import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  TodoActions,
  addTodo,
  decrementCounter,
  incrementCounter,
  logOut,
} from '../../../redux';

const useHomePage = () => {
  const reduxDispatch = useDispatch();
  const data = useSelector((state) => state.todo.todoList);

  const counter = useSelector((state) => state.counter.count);

  const [todoText, setTodoText] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleAdd = () => {
    if (!todoText) {
      Alert.alert('Error', 'Title can not be empty');
      return;
    }

    reduxDispatch(TodoActions.addTodo({ title: todoText, id: nanoid() }));
    setTodoText('');
  };

  useEffect(() => {
    reduxDispatch(addTodo('xyz'));
  }, []);

  const handleEdit = () => {
    if (!todoText) {
      Alert.alert('Error', 'Title can not be empty');
      return;
    }

    reduxDispatch(
      TodoActions.updateTodo({
        id: selectedIndex,
        changes: { title: todoText },
      })
    );
    setTodoText('');
    setSelectedIndex(-1);
  };

  const handleIncrement = useCallback(() => {
    reduxDispatch(incrementCounter(5));
  }, []);

  const handleDecrement = useCallback(() => {
    reduxDispatch(decrementCounter(1));
  }, []);

  const clearAll = useCallback(() => {
    reduxDispatch(logOut());
  }, []);

  return {
    data,
    counter,
    handleAdd,
    handleIncrement,
    handleDecrement,
    todoText,
    selectedIndex,
    setSelectedIndex,
    setTodoText,
    clearAll,
    handleEdit,
  };
};

export default useHomePage;
