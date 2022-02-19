import { UserList } from "./UserList";

export const UserContainer = () => {
  const users = [{ name: 'nqme', surname: '12', status: 'oj' }, { name: 'nqme', surname: '12', status: 'oj' }];
  return (
    <UserList users={users} />
  )
}