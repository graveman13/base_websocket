import { UPDATE_USER, GET_USER, GET_ALL_USERS, DELETE_USER, ADD_USER } from '../actionsTypes';

const initialState = {
  users: [],
}

export const userReducer = (state = [], action) => {
  switch (action.type) {

    case GET_ALL_USERS: {
      return  action.payload;
    };
    case GET_USER: {

    };
    case DELETE_USER: {

    };
    case UPDATE_USER: {

    };
    case ADD_USER: {

    }
    default: return state;
  }
}