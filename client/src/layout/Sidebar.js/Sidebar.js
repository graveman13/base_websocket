import { NavContainer } from "../../components/NavComponent"

const styles = {
  width: '15%',
  padding: '20px',
  background:"#F2F3F4"
}
export const Sidebar = () => {
  return (
    <div style={styles}>
      <NavContainer />
    </div>
  )
}