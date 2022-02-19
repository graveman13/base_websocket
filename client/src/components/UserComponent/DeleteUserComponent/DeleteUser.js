export const DeleteUser = ({ handleText, handleDeleteUserBtn }) => {
  return (
    <div>
      <input type='text' name='deleteUserId' onChange={handleText}></input>
      <button onClick={handleDeleteUserBtn}>Delete user</button>
    </div>
  )
}