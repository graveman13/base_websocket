import { getAllUsersAction, addUserAction, getDeleteUserAction, getUpdateUserAction, getUserAction } from '../actions/actionsUser'
import socket from '../../api/index';

export const getAllUserThunk = () => {
  return (dispatch) => {
    socket.emit('getAllUsers');
    socket.on('user/getAllUsers', (usersList) => {
      dispatch(getAllUsersAction(usersList))
    });
  };
};
export const getUserThunk = (userId) => {
  return (dispatch) => {
    socket.emit('user/getUser', userId, (userResponse) => {
      dispatch(getUserAction(userResponse));
    });
  };
};
export const deleteUserThunk = (userId) => {
  return (dispatch) => {
    socket.emit('user/deleteUser', userId, (userData) => {
      dispatch(getDeleteUserAction(userData));
    });
  };
};
export const updateUserThunk = (userData) => {
  return (dispatch) => {
    socket.emit('user/updateUser', userData, (userResponse) => {
      dispatch(getUpdateUserAction(userResponse));
    })
  };
};
export const addUserThunk = (userData) => {
  return async (dispatch) => {
    socket.emit('user/addUser', userData);
    dispatch(addUserAction(userData));
  };
};
