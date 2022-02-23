import { getAllUsersAction, addUserAction, getDeleteUserAction, getUpdateUserAction, getUserAction } from '../actions/actionsUser'

export const getAllUserThunk = (usersList) => {
  return async (dispatch) => {
    dispatch(getAllUsersAction(usersList));
  };
};
export const getUserThunk = (userId) => {
  return async (dispatch) => {
    dispatch(getUserAction(userId));
  };
};
export const deleteUserThunk = (userData) => {
  return async (dispatch) => {
    dispatch(getDeleteUserAction(userData));
  };
};
export const updateUserThunk = (userData) => {
  return async (dispatch) => {
    dispatch(getUpdateUserAction(userData));
  };
};
export const addUserThunk = (userData) => {
  return async (dispatch) => {
    dispatch(addUserAction(userData));
  };
};
