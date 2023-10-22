import styled from '@emotion/styled';

export const FooterStyle = styled.footer`
  text-align: center;
  padding: 20px;
  padding-left: 120px;
  border-top: 1px solid var(--separator-color);
`;

export const Link = styled.a`
  position: relative;
  font-size: 18px;
  color: var(--accent-color);
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
    /* text-decoration: underline; */
  }
`;

// export const LinkStyled = styled(Link)`
//   position: relative;
//   font-size: 12px;
//   font-weight: 600;
//   line-height: 14px;

//   color: var(--accent-color);

//   box-shadow: 0px 47px 355px 0px #00000012;

//   /* ${min(tablet)} {
//     font-size: 18px;
//     line-height: 24px;
//   } */
// `;
