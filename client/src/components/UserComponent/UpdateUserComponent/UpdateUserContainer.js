import React, { useState } from 'react';

import { UpdateUser } from "./UpdateUser"

export const UpdateUserContainer = () => {
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

  const handlerUpdateBtn = () => {
    console.log(userData)
    sendUser(userData);
  }

  return (
    <UpdateUser handlerText={handlerAddText} handlerUpdateBtn={handlerUpdateBtn} />
  )
}