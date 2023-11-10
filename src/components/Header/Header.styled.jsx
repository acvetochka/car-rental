import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyles = styled.header`
  box-shadow: 0px 10px 30px -10px var(--separator-color);
  border-radius: 8px;
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-color);
  z-index: 999;
`;

export const Logo = styled(NavLink)`
  /* position: relative; */
`;

export const LogoImg = styled.img`
  width: 100%;
  max-height: 100%;
`;

export const Navi = styled.nav`
  display: flex;
  gap: 50px;
`;

export const Link = styled(NavLink)`
  position: relative;
  font-size: 20px;
  transition: color 250ms ease-in-out, text-decoration 250ms ease-in-out;
  &:after {
    content: '';
    background: none repeat scroll 0 0 transparent;
    bottom: -1px;
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: var(--accent-hover);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
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
