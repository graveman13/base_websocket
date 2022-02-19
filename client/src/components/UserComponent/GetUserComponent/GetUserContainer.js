import { useState } from "react"
import { GetUser } from './GetUser';

export const GetUserContainer = () => {
  const [userId, setUserId] = useState({});
  const user = {};

  const handleText = ({ target: { name, value } }) => {
    setUserId({ [name]: value });
  }
  const handleGetUserBtn = () => {
    console.log(deleteUserId);
  }

  return (
    <di>
      <GetUser handleText={handleText} handleGetUserBtn={handleGetUserBtn} user={user}/>
    </di>
  )
}