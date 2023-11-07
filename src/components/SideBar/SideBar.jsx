// import { Container } from 'components/Layout/Layout.styled';
import { Header, Link, Logo, Navi } from './SideBar.styled';

const SideBar = () => {
  return (
    <Header>
      {/* <Container> */}
      <Logo to="/">Car Rental</Logo>
      <Navi>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </Navi>
      {/* </Container> */}
    </Header>
  );
};

export default SideBar;
