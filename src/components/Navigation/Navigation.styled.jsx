import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navi = styled.nav`
  display: flex;
  gap: 50px;
`;

export const Link = styled(NavLink)`
  position: relative;
  font-size: 20px;
  transition: color 500ms ease-in-out, text-decoration 500ms ease-in-out;
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    position: relative;
  }
  p:after {
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

  &.active {
    color: var(--accent-color);
  }

  &:hover {
    color: var(--accent-hover);
  }
  &:hover > p:after {
    width: 100%;
    left: 0;
  }
  /* &:after {
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
  } */
`;
