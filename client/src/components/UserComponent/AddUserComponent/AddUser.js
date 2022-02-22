const styles = {
  display: "flex",
  flexDirection: 'column',
}

export const AddUser = ({ handlerText, handlerSend, user }) => {
  return (
    <div style={styles}>
      <input type='text' placeholder="User name" name='userName' onChange={(e) => handlerText(e)} />
      <input type='text' placeholder="User surname" name='userSurname' onChange={(e) => handlerText(e)} />
      <input type='text' placeholder="User status" name='status' onChange={(e) => handlerText(e)} />
      <button onClick={handlerSend}>Add user</button>
      <div>{JSON.stringify(user)}</div>
    </div>
  )
}