import { Aside, Link, Logo, Navi } from './SideBar.styled';

const SideBar = () => {
  return (
    <Aside>
      <Logo>Car Rental</Logo>
      <Navi>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </Navi>
    </Aside>
  );
};

export default SideBar;
