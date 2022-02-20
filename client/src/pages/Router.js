import { Routes, Route } from 'react-router-dom';
import { AddUserContainer, UserContainer } from '../components/UserComponent';

import { AddUserPage, DeleteUserPage, GetUserPage, UpdateUserPage, UsersPage } from './index';

export const Router = () => {
  return (
    <Routes>
      <Route path="/users" element={<UsersPage />} />
      <Route path="/get_user" element={<GetUserPage />} />
      <Route path="/add_user" element={<AddUserPage />} />
      <Route path="/update_user" element={<UpdateUserPage />} />
      <Route path="/delete_user" element={<DeleteUserPage />} />
    </Routes>
  );
};