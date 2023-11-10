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
