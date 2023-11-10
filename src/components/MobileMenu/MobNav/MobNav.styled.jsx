import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const NavList = styled(motion.ul)`
  padding: 25px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

export const NavItem = styled(motion(NavLink))`
  position: relative;
  font-size: 28px;
  transition: color 500ms ease-in-out, text-decoration 500ms ease-in-out;
  &:after {
    content: '';
    background: none repeat scroll 0 0 transparent;
    bottom: -1px;
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: var(--accent-hover);
    transition: width 500ms ease 0s, left 500ms ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
  :hover {
    color: var(--accent-hover);
  }

  &.active {
    color: var(--accent-color);
  }
`;
