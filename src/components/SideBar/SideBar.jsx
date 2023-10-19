import { NavLink } from 'react-router-dom';
import { Aside, Logo, Navi } from './SideBar.styled';

const SideBar = () => {
  return (
    <Aside>
      <Logo>Car Rental</Logo>
      <Navi>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </Navi>
    </Aside>
  );
};

export default SideBar;
