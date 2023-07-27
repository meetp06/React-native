import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './TodoActionTypes';

export const addTodo = (todoData: any) => {
    return {
        type: ADD_TODO,
        payload: {
            todoData: todoData,
        },
    };
};

export const updateTodo = (todoIndex: any, updatedTodo: any) => {
    return {
        type: UPDATE_TODO,
        payload: {
            todoIndex: todoIndex,
            updatedTodo: updatedTodo,
        },
    };
};

export const deleteTodo = (todoIndex: any) => {
    return {
        type: DELETE_TODO,
        payload: {
            todoIndex: todoIndex,
        },
    };
};
