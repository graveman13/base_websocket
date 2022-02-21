import { useEffect, useState } from "react";
import { UserList } from "./UserList";
import userApi from '../../../api/user'
import { useDispatch, useSelector } from "react-redux";
import { getAllUserThunk } from "../../../redux/thunk/userThunks";

export const UserContainer = () => {
  const [users, setUsers] = useState([])
  const dispatch = useDispatch();
  const usersStore = useSelector(state => state.userReducer)

  console.log(usersStore)
  // useEffect(() => {
  //   socket.emit('getAllUsers')
  //   socket.on('user/getAllUsers', (userList) => {
  //     setUsers(userList)
  //   })
  // }, []);
  useEffect(() => {
    dispatch(getAllUserThunk());
  }, [dispatch])



  return (
    <div>
      {< UserList users={users} />}
    </div>
  )
}