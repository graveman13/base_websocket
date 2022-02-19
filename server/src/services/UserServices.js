import { addUser, deleteUser, getAllUsers, getUser, updateUser } from '../dao/index'

export const getAllUsersService = () => {
  return getAllUsers();
}
export const getUserService = (id) => {
  return getUser(id);
}
export const addUserService = (userData) => {
  return addUser(userData);
}
export const updateUserService = (id, userData) => {
  return updateUser(id, userData);
}
export const deleteUserService = (id) => {
  return deleteUser(id)
}

socket.emit('getAllUsers', getAllUsersService);
socket.on('getUser', getUserService);
socket.on('addUser');
socket.on('updateUser');
socket.on('deleteUser');