import { User } from "./User"

export const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => <User key={index} user={user} />)}
    </div>
  )
}