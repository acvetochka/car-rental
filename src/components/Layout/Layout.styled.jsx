import styled from '@emotion/styled';
import { desktop, max, min, tablet } from 'styles/media';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  margin: 0 auto;

  ${min(tablet)} {
    width: 768px;
  }

  ${min(desktop)} {
    width: 1440px;
  }
`;

export const Main = styled.main`
  padding-top: 30px;
  /* max-width: 1440px; */

  text-align: center;
  margin: 0 auto;
  padding-bottom: 30px;
  flex-grow: 1;
  /* padding-left: 200px; */

  ${max(tablet)} {
    max-width: 480px;
  }
`;

export const Container = styled.div`
  /* max-width: 1440px; */
  padding: 0 20px;
`;
