import carLogo from 'assets/rental-car-logo.png';
import { HeaderStyles, Link, Logo, LogoImg, Navi } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyles>
      <Logo to="/">
        <LogoImg src={carLogo} alt="logo" width="200" height="80" />
      </Logo>
      <Navi>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </Navi>
    </HeaderStyles>
  );
};

export default Header;
