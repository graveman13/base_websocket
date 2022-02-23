import socket from './'

const getAllUsersApi = () => {
  return new Promise(resolve => {
    socket.emit('getAllUsers',()=>{});
    socket.on('user/getAllUsers', (usersList) => resolve(usersList));
  })
}

const getUserByIdApi = (userId) => {
  return new Promise(resolve => {
    socket.emit('user/getUser', userId, (userResponse) => resolve(userResponse));
  })
}

const addUserApi = (userData) => {
  return new Promise(resolve => {
    socket.emit('user/addUser', userData);
    resolve(userData);
  })
}

const updateUserApi = (userData) => {
  return new Promise(resolve => {
    socket.emit('user/updateUser', userData, (userResponse) => {
      resolve(userResponse);
    })
  })
}

const deleteUserByIdApi = (deleteUserId) => {
  return new Promise(resolve => {
    socket.emit('user/deleteUser', deleteUserId, (userData) => {
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