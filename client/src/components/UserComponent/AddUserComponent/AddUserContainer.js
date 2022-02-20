import React, { useEffect, useState } from 'react';
import userApi from '../../../api/user';

import { AddUser } from "./AddUser"

export const AddUserContainer = () => {
  const [userData, setUserData] = useState({});

  const sendUser =  (userData) => {
    userApi.addUserApi(userData);
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
    <AddUser handlerText={handlerAddText} handlerSend={handlerAddBtn} />
  )
}