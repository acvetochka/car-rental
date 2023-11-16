import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { max, tablet } from 'styles/media';

export const Button = styled(NavLink)`
  background-color: var(--accent-color);
  color: var(--invert-color);
  transition: background-color 500ms ease-in-out;
  border-radius: 12px;
  border: none;
  padding: 12px 0px;
  text-align: center;
  display: block;
  width: 168px;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-hover);
  }

  ${max(tablet)} {
    width: 100%;
    padding: 18px 44px;
  }
`;
