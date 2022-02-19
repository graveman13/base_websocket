import { users } from "../store/users"

export const getAllUsers = () => {
  return users;
}
export const getUser = (id) => {
  return users[id];
}
export const addUser = (userData) => {
  users.push(userData)
}
export const updateUser = (id, userData) => {
  users[id] = userData;
}
export const deleteUser = (id) => {
  users.splice(id, 1);
}