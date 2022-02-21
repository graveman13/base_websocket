import { useEffect, useState } from "react";
import { UserList } from "./UserList";
import userApi from '../../../api/user'

export const UserContainer = () => {
  const [users, setUsers] = useState([])

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
      { < UserList users={users} /> }
    </div>
  )
}