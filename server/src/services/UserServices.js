import { addUser, deleteUser, getAllUsers, getUser, updateUser } from '../dao/index.js'

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
