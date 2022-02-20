import { users } from "../store/users.js"

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
  const user = users[id];
  users.splice(id, 1);
  return user;
}