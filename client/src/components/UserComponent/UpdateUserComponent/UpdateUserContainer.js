import React, { useState } from 'react';

import { UpdateUser } from "./UpdateUser"
import { useSelector } from 'react-redux';
import SocketApi from '../../../api/Socket/SocketClass';

export const UpdateUserContainer = () => {
  const [userData, setUserData] = useState({});
  const { updateUser } = useSelector(state => state.userReducer);

  const sendUser = (userData) => {
    SocketApi.updateUserApi(userData);
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