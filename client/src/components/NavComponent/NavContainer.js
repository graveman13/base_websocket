import { Nav } from './Nav';
import { navItems } from '../../config';
import { NavList } from './NavList';

export const NavContainer = () => {

  return <NavList navItems={navItems} />
}