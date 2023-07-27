import {ADD_PAGE, ADD_USER, EDIT_USER, USER_LIST} from './ActionTypes';

export const addUser = payload => ({
  type: ADD_USER,
});

export const editUser = payload => ({
  type: EDIT_USER,
});

export const addPage = () => ({
  type: ADD_PAGE,
});

export const listOfUser = item => ({
  type: USER_LIST,
  payload: item,
});
