
import { addUserService, deleteUserService, getAllUsersService, getUserService, updateUserService } from './UserServices.js';

export const servicesHandler = (socked) => {
  socked.on(GET_USERS, () => {
    console.info('get all users', getAllUsersService())
    socked.emit(GET_ALL_USERS, getAllUsersService());
  })

  socked.on(ADD_USER, (userData) => {
    addUserService(userData);
    console.info('add user', userData)
    socked.broadcast.emit('user/getAllUsers', getAllUsersService());
  });

  socked.on(DELETE_USER, (userId, callback) => {
    const user = deleteUserService(userId.id);
    console.info('delete user', user)
    socked.broadcast.emit('user/getAllUsers', getAllUsersService());
    callback({ status: 'ok', ...user });
  });

  socked.on(GET_USER, (userId, callback) => {
    const user = getUserService(userId.id);
    console.info('get user', user)
    callback({ status: 'ok', ...user });
  })

  socked.on(UPDATE_USER, (dataUser, callback) => {
    updateUserService(dataUser.userId, dataUser);
    console.info('update user', dataUser.userId)
    socked.broadcast.emit('user/getAllUsers', getAllUsersService());
    const updateUser = JSON.stringify(getUserService(dataUser.userId))
    callback(`user by id${dataUser.userId} update. User data ${updateUser}`);
  })
}