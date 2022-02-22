import userApi from "../../api/user";
import { getAllUsersAction, addUserAction, getDeleteUserAction, getUpdateUserAction, getUserAction } from '../actions/actionsUser'

export const getAllUserThunk = () => {
  return async (dispatch) => {
    const users = await userApi.getAllUsersApi();
    dispatch(getAllUsersAction(users));
  };
};
export const getUserThunk = (userId) => {
  return async (dispatch) => {
    const user = await userApi.getUserByIdApi(userId);
    dispatch(getUserAction(user));
  };
};
export const deleteUserThunk = (userId) => {
  return async (dispatch) => {
    const user = await userApi.deleteUserByIdApi(userId);
    dispatch(getDeleteUserAction(user));
  };
};
export const updateUserThunk = (userData) => {
  return async (dispatch) => {
    const user = await userApi.updateUserApi(userData);
    dispatch(getUpdateUserAction(user));
  };
};
export const addUserThunk = (userData) => {
  return async (dispatch) => {
    const user = await userApi.addUserApi(userData);
    dispatch(addUserAction(user));
  };
};