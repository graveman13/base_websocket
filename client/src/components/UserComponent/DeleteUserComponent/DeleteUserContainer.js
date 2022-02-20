import { useState } from "react"
import { DeleteUser } from './DeleteUser'

export const DeleteUserContainer = ({ socket }) => {
  const [deleteUserId, setDeleteUserId] = useState({});
  const [user, setUser] = useState({});

  const handleText = ({ target: { value } }) => {
    setDeleteUserId({ id: value });
  }
  const handleDeleteUserBtn = () => {
    sendDeleteUser();
  }
  const sendDeleteUser = async (userId) => {
    await socket.emit('user/deleteUser', deleteUserId, (response) => {
      setUser({ ...response });
    })
  }

  return (
    <div>
      <DeleteUser handleText={handleText} handleDeleteUserBtn={handleDeleteUserBtn} user={user} />
    </div>
  )
}