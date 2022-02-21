import socket from './'

const getAllUsersApi = () => {
  let users = []
  const resp = (usersList) => {
    console.log(usersList)
    users = usersList;
  }
  socket.emit('getAllUsers');
  socket.on('user/getAllUsers', resp);
  return users;
}

const getUserByIdApi = (userId) => {
  let user = {};
  socket.emit('user/getUser', userId, (response) => {
    user = response
  })
  console.log(user)
  return user
}

const addUserApi = (userData) => {
  socket.emit('user/addUser', userData);
}

const updateUserApi = (userData) => {
  let resp = ''
  socket.emit('user/updateUser', userData, (response) => {
    resp = response;
  })
  return resp;
}

const deleteUserByIdApi = (deleteUserId) => {
  let resp = {}
  socket.emit('user/deleteUser', deleteUserId, (response) => {
    resp = { ...response };
  });
  return resp;
}

const userApi = {
  getAllUsersApi,
  getUserByIdApi,
  addUserApi,
  updateUserApi,
  deleteUserByIdApi,
}
export default userApi;