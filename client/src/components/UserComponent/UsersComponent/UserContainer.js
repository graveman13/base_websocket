import { useEffect, useState } from "react";
import { UserList } from "./UserList";
import socket from '../../../api/index'
import userApi from '../../../api/user'
import {
  useLocation
} from "react-router-dom";

export const UserContainer = () => {
  const [users, setUsers] = useState([])
  let location = useLocation();

  // useEffect(() => {
  //   socket.emit('getAllUsers')
  //   socket.on('user/getAllUsers', (userList) => {
  //     setUsers(userList)
  //   })
  // }, []);

  useEffect(() => {
    const users = userApi.getAllUsersApi();
    setUsers(users);
  }, [])

  return (
    <div>
      {!!users.length ? < UserList users={users} /> : <div>1</div>}
    </div>
  )
}