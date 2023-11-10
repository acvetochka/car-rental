import styled from '@emotion/styled';

export const Button = styled.button`
  position: relative;
  color: var(--accent-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 500ms ease-in-out;

  :hover {
    color: var(--accent-hover);
  }

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
`;
