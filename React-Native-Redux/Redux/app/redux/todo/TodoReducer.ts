import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './TodoActionTypes';

const initialState = {
    todoList: [],
};

const todoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };

        case UPDATE_TODO:
            return {
                ...state,
                todoList: state.todoList.map((value, index) =>
                    index === action.payload.todoIndex
                        ? action.payload.updatedTodo
                        : value
                ),
            };

        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(
                    (_, index) => index !== action.payload.todoIndex
                ),
            };

        default:
            return state;
    }
};

export default todoReducer;
