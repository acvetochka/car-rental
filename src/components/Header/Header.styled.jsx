import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyles = styled.header`
  /* border-bottom: 1px solid var(--separator-color); */
  /* box-shadow: 1px 1px 1px var(--accent-color); */
  /* box-shadow: 0px 10px 13px -7px var(--accent-color),
    4px 6px 15px 0px rgba(0, 0, 0, 0); */
  /* box-shadow: 0px 10px 20px -10px var(--accent-color),
    4px 6px 15px 0px rgba(0, 0, 0, 0); */
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
  margin: 0;
  text-transform: uppercase;
  color: #0b5cc7;
  font-size: 40px;
  text-shadow: 0 1px 3px #6566c6, 0 2px 3px #7387e6, 0 3px 3px #8ca0d3;
`;

export const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
export const Navi = styled.nav`
  display: flex;
  /* flex-direction: column; */
  gap: 50px;
  /* padding-top: 30px; */
`;

export const Link = styled(NavLink)`
  position: relative;
  font-size: 18px;
  /* color: var(--accent-color); */
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

  /* :hover {
    color: var(--accent-color);
    font-weight: 500;
  } */

  &.active {
    color: var(--accent-color);
  }
`;
