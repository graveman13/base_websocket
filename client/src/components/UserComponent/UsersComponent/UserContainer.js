import { useEffect, useState } from "react";
import { UserList } from "./UserList";

export const UserContainer = ({ socket }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    socket.emit('getAllUsers')
    socket.on('user/getAllUsers', (userList) => {
      setUsers(userList)
    })
  },[]);

  return (
    <div>
      {!!users.length ? < UserList users={users} /> : <div>1</div>}
    </div>
  )
}