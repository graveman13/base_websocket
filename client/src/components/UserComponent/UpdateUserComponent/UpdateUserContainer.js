import React, { useState } from 'react';

import { UpdateUser } from "./UpdateUser"
import userApi from '../../../api/user';

export const UpdateUserContainer = () => {
  const [userData, setUserData] = useState({});
  const [resp, setRespon] = useState('');

  const sendUser = (userData) => {
    const response = userApi.updateUserApi(userData);
    setRespon(response);
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
    <UpdateUser handlerText={handlerAddText} handlerUpdateBtn={handlerUpdateBtn} resp={resp} />
  )
}