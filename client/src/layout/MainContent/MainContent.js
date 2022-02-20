import { Router } from "../../pages/Router"

const styles = {
  padding: '40px',
}
export const MainContent = ({ socket }) => {

  return (
    <div style={styles}>
      {<Router socket={socket}/>}
    </div>
  )
}