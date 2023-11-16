import styled from '@emotion/styled';
import { max, tablet } from 'styles/media';

export const Button = styled.button`
  background-color: var(--accent-color);
  color: var(--invert-color);
  transition: background-color 500ms ease-in-out;
  width: 100%;
  border-radius: 12px;
  border: none;
  padding: 12px 0;
  margin-top: 28px;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-hover);
  }

  ${max(tablet)} {
    width: 100%;
    padding: 18px 44px;
  }
`;
