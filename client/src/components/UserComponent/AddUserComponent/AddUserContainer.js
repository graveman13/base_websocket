import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserThunk } from '../../../redux/thunk/userThunks';

import { AddUser } from "./AddUser"

export const AddUserContainer = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const { addUser } = useSelector(state => state.userReducer);

  const sendUser = (userData) => {
    dispatch(addUserThunk(userData));
  }

  const handlerAddText = ({ target }) => {
    const { name, value } = target;
    setUserData(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handlerAddBtn = () => {
    sendUser(userData);
  }

  return (
    <AddUser handlerText={handlerAddText} handlerSend={handlerAddBtn} user={addUser} />
  )
}