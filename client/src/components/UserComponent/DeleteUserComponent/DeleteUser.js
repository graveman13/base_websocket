export const DeleteUser = ({ handleText, handleDeleteUserBtn, user }) => {
  return (
    <div>
      <input type='text' name='deleteUserId' onChange={handleText}></input>
      <button onClick={handleDeleteUserBtn}>Delete user</button>
      <div>User was delete{JSON.stringify(user)}</div>
    </div>
  )
}