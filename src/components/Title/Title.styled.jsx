import styled from '@emotion/styled';
import { max, tablet } from 'styles/media';

export const TitleStyle = styled.h1`
  font-size: 42px;
  color: var(--accent-color);
  margin-bottom: 30px;

  ${max(tablet)} {
    font-size: 32px;
  }
`;
