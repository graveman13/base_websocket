import { NavContainer } from "../../components/NavComponent"

const styles = {
  width: '40%',
  padding: '20px',
}
export const SideBar = () => {
  return (
    <div style={styles}>
      <NavContainer />
    </div>
  )
}