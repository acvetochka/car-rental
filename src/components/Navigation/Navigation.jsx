import {
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineHome,
} from 'react-icons/hi2';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link, Navi } from './Navigation.styled';

const Navigation = () => {
  return (
    <Navi>
      <Link to="/">
        <HiOutlineHome />
        <p>Home</p>
      </Link>
      <Link to="/catalog">
        <HiOutlineDocumentMagnifyingGlass />
        <p>Catalog</p>
      </Link>
      <Link to="/favorites">
        <AiOutlineHeart />
        <p>Favorites</p>
      </Link>
    </Navi>
  );
};

export default Navigation;
