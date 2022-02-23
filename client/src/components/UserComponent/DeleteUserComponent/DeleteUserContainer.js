import { useState } from "react"
import { useSelector } from "react-redux";
import { DeleteUser } from './DeleteUser'
import SocketApi from "../../../api/Socket/SocketClass";

export const DeleteUserContainer = () => {
  const [deleteUserId, setDeleteUserId] = useState({});
  const { deleteUser } = useSelector(state => state.userReducer);

  const handleText = ({ target: { value } }) => {
    setDeleteUserId({ id: value });
  }
  const handleDeleteUserBtn = () => {
    sendDeleteUser(deleteUserId);
  }
  const sendDeleteUser = (userId) => {
    SocketApi.deleteUserByIdApi(userId);
  }

  return (
    <div>
      <DeleteUser handleText={handleText} handleDeleteUserBtn={handleDeleteUserBtn} user={deleteUser} />
    </div>
  )
}