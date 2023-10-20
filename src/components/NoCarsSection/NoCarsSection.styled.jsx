import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled(NavLink)`
  background-color: var(--accent-color);
  color: var(--invert-color);
  transition: background-color 250ms ease-in-out;
  border-radius: 12px;
  border: none;
  padding: 12px 44px;
  /* width: 150px; */
  margin-top: 28px;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-hover);
  }
`;
