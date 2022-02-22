import { useEffect, useState } from "react"
import { GetUser } from './GetUser';
import userApi from "../../../api/user";
import { User } from "../UsersComponent/User";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../../../redux/thunk/userThunks";

export const GetUserContainer = () => {
  const [userId, setUserId] = useState({});
  const dispatch = useDispatch();
  const { getUser: user } = useSelector(state => state.userReducer)

  const handleText = ({ target: { value } }) => {
    setUserId({ id: value });
  }
  const handleGetUserBtn = () => {
    getUserById(userId)
  }

  const getUserById = (userId) => {
    dispatch(getUserThunk(userId));
  }


  return (
    <div>
      <GetUser handleText={handleText} handleGetUserBtn={handleGetUserBtn} user={user} />
    </div>
  )
}