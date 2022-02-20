import { UserContainer } from "../../components/UserComponent";

export const UsersPage = ({ socket }) => {
  return (
    <UserContainer socket={socket} />
  )
}