import { useState } from "react"
import { GetUser } from './GetUser';
import { useSelector } from "react-redux";
import SocketApi from "../../../api/Socket/SocketClass";

export const GetUserContainer = () => {
  const [userId, setUserId] = useState({});
  const { getUser: user } = useSelector(state => state.userReducer)

  const handleText = ({ target: { value } }) => {
    setUserId({ id: value });
  }
  const handleGetUserBtn = () => {
    getUserById(userId)
  }

  const getUserById = (userId) => {
    SocketApi.getUserByIdApi(userId);
  }

  return (
    <div>
      <GetUser handleText={handleText} handleGetUserBtn={handleGetUserBtn} user={user} />
    </div>
  )
}