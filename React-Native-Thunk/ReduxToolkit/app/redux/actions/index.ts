import { createAction } from '@reduxjs/toolkit';

export const logOut = createAction('LOG_OUT');
export const incrementCounter = createAction('INCREMENT_COUNTER');
export const decrementCounter = createAction('DECREMENT_COUNTER');
