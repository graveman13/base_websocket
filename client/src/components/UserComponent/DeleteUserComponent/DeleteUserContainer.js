import { useState } from "react"
import { DeleteUser } from './DeleteUser'
import userApi from "../../../api/user";

export const DeleteUserContainer = () => {
  const [deleteUserId, setDeleteUserId] = useState({});
  const [user, setUser] = useState({});

  const handleText = ({ target: { value } }) => {
    setDeleteUserId({ id: value });
  }
  const handleDeleteUserBtn = () => {
    sendDeleteUser(deleteUserId);
  }
  const sendDeleteUser = (userId) => {
    const response = userApi.deleteUserByIdApi(userId);
    setUser({ ...response });
  }

  return (
    <div>
      <DeleteUser handleText={handleText} handleDeleteUserBtn={handleDeleteUserBtn} user={user} />
    </div>
  )
}