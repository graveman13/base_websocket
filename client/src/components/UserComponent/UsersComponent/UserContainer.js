import { useEffect } from "react";
import { UserList } from "./UserList";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserThunk } from "../../../redux/thunk/userThunks";

export const UserContainer = () => {
  const { users } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserThunk());
  }, [dispatch])


  return (
    <div>
      < UserList users={users} />
    </div>
  )
}