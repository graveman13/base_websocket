import { Nav } from "./Nav"

export const NavList = ({ navItems }) => {
  return (
    <>
      {
        navItems.map((nav, index) => (
          <div><Nav /></div>
        ))
      }
    </>
  )
}