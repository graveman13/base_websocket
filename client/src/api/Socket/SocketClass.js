import io from 'socket.io-client'
import { getAllUserThunk, addUserThunk, deleteUserThunk, getUserThunk, updateUserThunk } from '../../redux/thunk/userThunks';

const apiUrl = process.env.REACT_APP_WS_URL;

class SocketClass {
  constructor(url) {
    this.url = url;
    this.socket = io(this.url);
  }

  setStore(store) {
    this.store = store;
    this.dispatch = this.store.dispatch;
  }

  getAllUsersApi = () => {
    this.socket.emit('getAllUsers');
    this.socket.on('user/getAllUsers', (usersList) => {
      this.dispatch(getAllUserThunk(usersList));
    });
  }

  getUserByIdApi = (userId) => {
    this.socket.emit('user/getUser', userId, (userResponse) => {
      this.dispatch(getUserThunk(userResponse));
    });
  }

  addUserApi = (userData) => {
    this.socket.emit('user/addUser', userData);
    this.dispatch(addUserThunk(userData));
    this.socket.emit('getAllUsers', () => { });
    this.socket.on('user/getAllUsers', (usersList) => {
      this.dispatch(getAllUserThunk(usersList));
    })
  }

  updateUserApi = (userData) => {
    this.socket.emit('user/updateUser', userData, (userResponse) => {
      this.dispatch(updateUserThunk(userResponse));
    })
  }

  deleteUserByIdApi = (deleteUserId) => {
    this.socket.emit('user/deleteUser', deleteUserId, (userData) => {
      this.dispatch(deleteUserThunk(userData));
    })
  }
}

const SocketApi = new SocketClass(apiUrl);
export default SocketApi;