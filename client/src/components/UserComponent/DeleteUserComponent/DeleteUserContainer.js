import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deleteUserThunk } from "../../../redux/thunk/userThunks";
import { DeleteUser } from './DeleteUser'

export const DeleteUserContainer = () => {
  const [deleteUserId, setDeleteUserId] = useState({});
  const dispatch = useDispatch();
  const { deleteUser } = useSelector(state => state.userReducer);

  const handleText = ({ target: { value } }) => {
    setDeleteUserId({ id: value });
  }
  const handleDeleteUserBtn = () => {
    sendDeleteUser(deleteUserId);
  }
  const sendDeleteUser = (userId) => {
    dispatch(deleteUserThunk(userId));
  }

  return (
    <div>
      <DeleteUser handleText={handleText} handleDeleteUserBtn={handleDeleteUserBtn} user={deleteUser} />
    </div>
  )
}