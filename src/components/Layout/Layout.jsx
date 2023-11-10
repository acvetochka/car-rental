import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import { Container, Main, MainWrapper } from './Layout.styled';

function Layout() {
  return (
    <MainWrapper>
      {/* <Container> */}
      <Header />
      {/* </Container> */}
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer />
    </MainWrapper>
  );
}

export default Layout;
