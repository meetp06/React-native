import { createReducer } from '@reduxjs/toolkit';
import { decrementCounter, incrementCounter, logOut } from '../actions';

const initialState = {
  count: 0,
};

export const CounterReducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementCounter, (state, action) => {
    state.count += action.payload;
  });
  builder.addCase(decrementCounter, (state, action) => {
    state.count -= action.payload;
  });
  builder.addCase(logOut, (_) => {
    return initialState;
  });
  builder.addDefaultCase((state) => {
    return state;
  });
});

// const counterSlice = createSlice({
//   initialState,
//   name: 'counter',

//   reducers: {
//     incrementCounter: (state, action) => {
//       try {
//         state.count += action.payload;
//         throw 1;
//       } catch (error) {
//         console.log('====================================');
//         console.log(error);
//         console.log('====================================');
//       }
//     },

//     decrementCounter: (state, action) => {
//       state.count -= action.payload;
//     },
//   },

//   extraReducers: (builder) => {
//     builder.addCase(logOut, (state) => {
//       return initialState;
//     });
//   },
// });

// export {incrementCounter, decrementCounter} = counterSlice.actions;
// export const CounterReducer = counterSlice.reducer;
