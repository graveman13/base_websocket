import React, { useEffect, useState } from 'react';

import { AddUser } from "./AddUser"

export const AddUserContainer = ({ socket }) => {
  const [userData, setUserData] = useState({});

  const sendUser = async (userData) => {
    await socket.emit('user/addUser', userData);
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