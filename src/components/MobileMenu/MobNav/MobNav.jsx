import { Link, NavItem, NavList } from './MobNav.styled';
import {
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineHome,
} from 'react-icons/hi2';
import { AiOutlineHeart } from 'react-icons/ai';

const variantsLink = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    visibility: 'visible',
    pointerEvents: 'auto',
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    visibility: 'hidden',
    pointerEvents: 'none',
  },
};

const menu = [
  { id: 1, name: 'Home', src: '/' },
  { id: 2, name: 'Catalog', src: '/catalog' },
  { id: 3, name: 'Favorites', src: '/favorites' },
];

export const MobNav = ({ onClose }) => (
  <NavList variants={variants}>
    {menu.map(({ id, name, src }) => (
      <NavItem key={id}>
        <Link
          variants={variantsLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          exit={{ scale: 1 }}
          to={src}
          onClick={onClose}
        >
          {id === 1 && <HiOutlineHome width={20} height={20} />}
          {id === 2 && <HiOutlineDocumentMagnifyingGlass />}
          {id === 3 && <AiOutlineHeart />}
          <p>{name}</p>
        </Link>
      </NavItem>
    ))}
  </NavList>
);
