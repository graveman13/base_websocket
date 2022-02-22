import { UPDATE_USER, GET_USER, GET_ALL_USERS, DELETE_USER, ADD_USER } from '../actionsTypes';

const initialState = {
  users: [],
  addUser: {},
  deleteUser: {},
  updateUser: {},
  getUser: {},
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    };
    case GET_USER: {
      return {
        ...state,
        getUser: action.payload,
      };
    };
    case DELETE_USER: {
      return {
        ...state,
        deleteUser: action.payload,
      }
    };
    case UPDATE_USER: {
      return {
        ...state,
        updateUser: action.payload,
      }
    };
    case ADD_USER: {
      return {
        ...state,
        addUser: action.payload,
      };
    }
    default: return state;
  }
}