export const GetUser = ({ handleText, handleGetUserBtn, user }) => {
  return (
    <div>
      <input type='text' name='getUserId' onChange={handleText}></input>
      <button onClick={handleGetUserBtn}>Get user</button>
      <div>{JSON.stringify(user)}</div>
    </div>
  )
}