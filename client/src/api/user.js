import socket from './'

const getAllUsersApi = () => {
  let users = []
  socket.emit('getAllUsers');
  socket.on('user/getAllUsers', (usersList) => {
    users = usersList;
    console.log('in callback', users);
  }); 
  console.log('out callback', users);
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