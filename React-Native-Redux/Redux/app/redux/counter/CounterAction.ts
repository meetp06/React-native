import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './CounterActionTypes';

export const incrementCounterAction = (parameter: any) => {
    return {
        type: INCREMENT_COUNTER,
        payload: parameter,
    };
};

export const decrementCounterAction = () => {
    return {
        type: DECREMENT_COUNTER,
    };
};
