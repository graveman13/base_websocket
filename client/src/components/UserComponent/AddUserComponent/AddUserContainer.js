import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SocketApi from '../../../api/Socket/SocketClass';

import { AddUser } from "./AddUser"

export const AddUserContainer = () => {
  const [userData, setUserData] = useState({});
  const { addUser } = useSelector(state => state.userReducer);

  const sendUser = (userData) => {
    SocketApi.addUserApi(userData);
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