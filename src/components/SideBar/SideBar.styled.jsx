import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Aside = styled.aside`
  padding: 20px;
  width: 200px;
  position: fixed;
`;

export const Logo = styled.p`
  /* text-transform: uppercase;
  text-shadow: 0 1px 0 #cac8c8, 0 2px 0 #c7c5c5, 0 3px 0 #bbbaba,
    0 4px 0 #b7b6b6, 0 5px 0 #a9a6a6; */
  margin: 0;
  text-transform: uppercase;
  color: #0b5cc7;
  font-size: 40px;
  text-shadow: 0 1px 3px #6566c6, 0 2px 3px #7387e6, 0 3px 3px #8ca0d3,
    0 4px 3px #bec6e9, 0 5px 3px #a9a6a6;
  margin-bottom: 30px;
`;
export const Navi = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  :hover {
    color: var(--accent-color);
    font-weight: 500;
  }

  &.active {
    color: var(--accent-color);
  }
`;
