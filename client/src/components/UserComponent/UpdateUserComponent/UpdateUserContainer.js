import React, { useState } from 'react';

import { UpdateUser } from "./UpdateUser"
import { useDispatch, useSelector } from 'react-redux';
import { updateUserThunk } from '../../../redux/thunk/userThunks';

export const UpdateUserContainer = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const { updateUser } = useSelector(state => state.userReducer);

  const sendUser = (userData) => {
    dispatch(updateUserThunk(userData));
  }
  const handlerAddText = ({ target }) => {
    const { name, value } = target;
    setUserData(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handlerUpdateBtn = () => {
    sendUser(userData);
  }

  return (
    <UpdateUser handlerText={handlerAddText} handlerUpdateBtn={handlerUpdateBtn} user={updateUser} />
  )
}