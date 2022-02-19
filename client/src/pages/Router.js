import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserContainer, AddUserContainer, DeleteUserContainer, GetUserContainer, UpdateUserContainer } from '../components';
import { UserContainer } from '../components';
export const Router = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UserContainer />} />
        <Route path="/get_user" element={<GetUserContainer />} />
        <Route path="/add_user" element={<AddUserContainer />} />
        <Route path="/update_user" element={<UpdateUserContainer />} />
        <Route path="/delete_user" element={<GetUserContainer />} />
      </Routes>
    </BrowserRouter>
  )
}