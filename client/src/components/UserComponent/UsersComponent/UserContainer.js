import { useEffect } from "react";
import { UserList } from "./UserList";
import { useSelector } from "react-redux";
import SocketApi from "../../../api/Socket/SocketClass";

export const UserContainer = () => {
  const { users } = useSelector(state => state.userReducer);

  useEffect(() => {
    SocketApi.getAllUsersApi();
  }, [])

  return (
    <div>
      < UserList users={users} />
    </div>
  )
}