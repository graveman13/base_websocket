import socket from './'
import { GET_USERS, GET_ALL_USERS, GET_USER, ADD_USER, UPDATE_USER, DELETE_USER } from '../../../common';

const getAllUsersApi = () => {
  return new Promise(resolve => {
    socket.emit(GET_USERS);
    socket.on(GET_ALL_USERS, (usersList) => resolve(usersList));
  })
}

const getUserByIdApi = (userId) => {
  return new Promise(resolve => {
    socket.emit(GET_USER, userId, (userResponse) => {
      resolve(userResponse);
    })
  })
}

const addUserApi = (userData) => {
  return new Promise(resolve => {
    socket.emit(ADD_USER, userData);
    resolve(userData);
  })
}

const updateUserApi = (userData) => {
  return new Promise(resolve => {
    socket.emit(UPDATE_USER, userData, (userResponse) => {
      resolve(userResponse);
    })
  })
}

const deleteUserByIdApi = (deleteUserId) => {
  return new Promise(resolve => {
    socket.emit(DELETE_USER, deleteUserId, (userData) => {
      resolve(userData);
    });
  })
}

const userApi = {
  getAllUsersApi,
  getUserByIdApi,
  addUserApi,
  updateUserApi,
  deleteUserByIdApi,
}
export default userApi;