import { NavItem, NavList } from './MobNav.styled';

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
      <NavItem
        key={id}
        variants={variantsLink}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        to={src}
        onClick={onClose}
      >
        {name}
      </NavItem>
    ))}
  </NavList>
);
