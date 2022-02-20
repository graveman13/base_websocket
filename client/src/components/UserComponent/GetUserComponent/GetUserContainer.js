import { useEffect, useState } from "react"
import { GetUser } from './GetUser';
import userApi from "../../../api/user";
import { User } from "../UsersComponent/User";

export const GetUserContainer = () => {
  const [userId, setUserId] = useState({});
  const [user, setUser] = useState({});

  const handleText = ({ target: { value } }) => {
    setUserId({ id: value });
  }
  const handleGetUserBtn = () => {
    getUserById(userId)
  }

  const getUserById = (userId) => {
    const response = userApi.getAllUsersApi(User);
    setUser(response);
  }

  return (
    <div>
      <GetUser handleText={handleText} handleGetUserBtn={handleGetUserBtn} user={user} />
    </div>
  )
}