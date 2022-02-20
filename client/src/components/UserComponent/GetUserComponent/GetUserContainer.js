import { useEffect, useState } from "react"
import { GetUser } from './GetUser';

export const GetUserContainer = ({ socket }) => {
  const [userId, setUserId] = useState({});
  const [user, setUser] = useState({});

  const handleText = ({ target: { value } }) => {
    setUserId({ id: value });
  }
  const handleGetUserBtn = () => {
    getUserById(userId)
  }

  const getUserById = async (userId) => {
    await socket.emit('user/getUser', userId, (response) => {
      setUser({ ...response });
    })
  }

  return (
    <div>
      <GetUser handleText={handleText} handleGetUserBtn={handleGetUserBtn} user={user} />
    </div>
  )
}