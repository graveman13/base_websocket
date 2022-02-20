import { useEffect, useState } from "react";
import { UserList } from "./UserList";
import { socket } from '../../../api/index'
import userApi from '../../../api/user'

export const UserContainer = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // socket.emit('getAllUsers')
    // socket.on('user/getAllUsers', (userList) => {
    //   setUsers(userList)
    // })
    const users = userApi.getAllUsersApi();
    console.log(users)
    setUsers(userApi.getAllUsersApi());
  }, []);

  return (
    <div>
      {!!users.length ? < UserList users={users} /> : <div>1</div>}
    </div>
  )
}