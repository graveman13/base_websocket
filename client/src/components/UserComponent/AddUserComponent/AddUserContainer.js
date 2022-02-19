import React, { useState } from 'react';

import { AddUser } from "./AddUser"

export const AddUserContainer = () => {
  const [userData, setUserData] = useState({});

  const sendUser = (userData) => {
    setUserData(userData);
  }
  const handlerAddText = ({ target }) => {
    const { name, value } = target;
    setUserData(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handlerAddBtn = () => {
    console.log(userData)
    sendUser(userData);
  }

  return (
    <AddUser handlerText={handlerAddText} handlerSend={handlerAddBtn} />
  )
}