import { Nav } from "./Nav"

export const NavList = ({ navItems }) => {
  return (
    <>
      {
        navItems.map((nav, index) => (
          <div  key={index}><Nav nav={nav}/></div>
        ))
      }
    </>
  )
}