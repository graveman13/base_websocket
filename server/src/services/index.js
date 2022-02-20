
import { addUserService, deleteUserService, getAllUsersService, getUserService, updateUserService } from './UserServices.js';

export const servicesHandler = (socked) => {
  socked.on('getAllUsers', () => {
    console.info('get all users', getAllUsersService())
    socked.emit('user/getAllUsers', getAllUsersService());
  })

  socked.on('user/addUser', (userData) => {
    addUserService(userData);
    console.info('add user', userData)
    socked.broadcast.emit('user/getAllUsers', getAllUsersService());
  });

  socked.on('user/deleteUser', (userId, callback) => {
    const user = deleteUserService(userId.id);
    console.info('delete user', user)
    socked.broadcast.emit('user/getAllUsers', getAllUsersService());
    callback({ status: 'ok', ...user });
  });

  socked.on('user/getUser', (userId, callback) => {
    const user = getUserService(userId.id);
    console.info('get user', user)
    callback({ status: 'ok', ...user });
  })

  socked.on('user/updateUser', (dataUser, callback) => {
    updateUserService(dataUser.userId, dataUser);
    console.info('update user', dataUser.userId)
    socked.broadcast.emit('user/getAllUsers', getAllUsersService());
    callback(`user update${dataUser.userId}`);
  })
}