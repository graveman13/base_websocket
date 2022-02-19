export const DeleteUser = ({ handleText, handleGetUserBtn, user }) => {
  return (
    <div>
      <input type='text' name='getUserId' onChange={handleText}></input>
      <button onClick={handleGetUserBtn}>Get user</button>
      <div>{user}</div>
    </div>
  )
}