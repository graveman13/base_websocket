import  socket from './'

const getAllUsersApi =  () => {
  console.log(socket)
  let users = []
   socket.emit('getAllUsers')
   socket.on('user/getAllUsers', (userList) => {
    users = userList
  })
  return users;
}

const getUserByIdApi = (userId) => {
  let response = {}
  socket.emit('user/getUser', userId, (response) => {
    response = { ...response };
  })
  return response
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