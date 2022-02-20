export const User = ({ user: { userName, userSurname, status } }) => {
  return (
    <div>{`${userName} ${userSurname} ${status}`}</div>
  )
}