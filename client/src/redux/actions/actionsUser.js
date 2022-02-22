import { UPDATE_USER, GET_USER, GET_ALL_USERS, DELETE_USER, ADD_USER } from '../actionsTypes';

export const getAllUsersAction = (payload) => {
  return {
    type: GET_ALL_USERS,
    payload,
  }
}
export const getUserAction = (payload) => {
  return {
    type: GET_USER,
    payload,
  }

}
export const getUpdateUserAction = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  }
}
export const getDeleteUserAction = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  }
}
export const addUserAction = (payload) => {
  return {
    type: ADD_USER,
    payload,
  }
}