export const User = ({ user: { name, surname, status } }) => {
  return (
    <div>{`${name} ${surname} ${status}`}</div>
  )
}