import { Link } from "react-router-dom";

export const Nav = ({ nav }) => {
  return (
    <Link to={nav.to}>{nav.title}</Link>
  )
}