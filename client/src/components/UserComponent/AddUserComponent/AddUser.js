export const UpdateUser = ({ handlerText, handlerSend }) => {
  return (
    <div>
      <input type='text' placeholder="User name" name='userName' onChange={(e) => handlerText(e)} />
      <input type='text' placeholder="User surname" name='userSurname' onChange={(e) => handlerText(e)} />
      <input type='text' placeholder="User status" name='status' onChange={(e) => handlerText(e)} />
      <button onClick={handlerSend}>Add user</button>
    </div>
  )
}