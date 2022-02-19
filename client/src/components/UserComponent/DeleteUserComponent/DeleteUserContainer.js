import { useState } from "react"

export const DeleteUser = () => {
  const [deleteUserId, setDeleteUserId] = useState({});

  const handleText = ({ target: { name, value } }) => {
    setDeleteUserId({ [name]: value });
  }
  const handleDeleteUserBtn = () => {
    sendDeleteUser();
  }
  const sendDeleteUser = () => {
    console.log(deleteUserId);
  }
  return (
    <di>
      <DeleteUser handleText={handleText} handleDeleteUserBtn={handleDeleteUserBtn} />
    </di>
  )
}