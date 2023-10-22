import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  background-color: var(--accent-color);
  color: var(--invert-color);
  transition: background-color 250ms ease-in-out;
  border-radius: 12px;
  border: none;
  padding: 12px 44px;
  /* width: 150px; */
  /* max-width:  */
  margin-top: 28px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-hover);
  }
`;
