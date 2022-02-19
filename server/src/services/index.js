
import { addUserService, deleteUserService, getAllUsersService, getUserService, updateUserService } from './UserServices';

export const servicesHandler = (socked) => {
  socked.emit('user/getAllUsers', getAllUsersService);

  socked.on('user/addUser', (userData) => {
    addUserService(userData);
  });

  socked.on('user/deleteUser', (id) => {
    deleteUserService(id);
  });

  socked.on('user/getUser', (id, callback) => {
    const user = getUserService(id);
    callback({ status: 'ok', ...user });
  })

  socked.on('user/updateUser', (id, dataUser, callback) => {
    updateUserService(id, dataUser);
    callback({ status: 'ok' });
  })
}