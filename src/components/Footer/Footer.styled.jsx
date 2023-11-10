import styled from '@emotion/styled';

export const FooterStyle = styled.footer`
  text-align: center;
  padding: 20px;
  /* padding-left: 120px; */
  /* border-top: 1px solid var(--separator-color); */
  /* box-shadow: 0px -10px 20px -10px var(--accent-color),
    4px 6px 15px 0px rgba(0, 0, 0, 0); */
  box-shadow: 0px -10px 30px -10px var(--separator-color);
  border-radius: 8px;
`;

export const Link = styled.a`
  position: relative;
  font-size: 18px;
  color: var(--accent-color);
  transition: color 500ms ease-in-out, text-decoration 500ms ease-in-out;
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

