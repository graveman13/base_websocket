import React, { useState } from 'react';

import { UpdateUser } from "./UpdateUser"

export const UpdateUserContainer = ({ socket }) => {
  const [userData, setUserData] = useState({});
  const [resp, setRespon] = useState('');

  const sendUser =  (userData) => {
     socket.emit('user/updateUser',userData,(response)=>{
      setRespon(response);
    })
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
    <UpdateUser handlerText={handlerAddText} handlerUpdateBtn={handlerUpdateBtn} resp={resp}/>
  )
}