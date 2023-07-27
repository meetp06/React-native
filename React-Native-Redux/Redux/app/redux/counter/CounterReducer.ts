import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './CounterActionTypes';

//initializing state
const initialState = {
    counter: 0,
    secondCounter: 0,
};

const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + action.payload,
            };

        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1,
            };

        default:
            return state;
    }
};

export default counterReducer;
