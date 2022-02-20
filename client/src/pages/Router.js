import { Routes, Route } from 'react-router-dom';
import { AddUserContainer, UserContainer } from '../components/UserComponent';

import { AddUserPage, DeleteUserPage, GetUserPage, UpdateUserPage, UsersPage } from './index';

export const Router = ({ socket }) => {
  return (
    <Routes>
      <Route path="/users" element={<UsersPage socket={socket} />} />
      <Route path="/get_user" element={<GetUserPage socket={socket} />} />
      <Route path="/add_user" element={<AddUserPage socket={socket} />} />
      <Route path="/update_user" element={<UpdateUserPage socket={socket} />} />
      <Route path="/delete_user" element={<DeleteUserPage socket={socket} />} />
    </Routes>
  );
};