import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from 'components/SideBar/SideBar';
import { Container, Main, MainWrapper } from './Layout.styled';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';

function Layout() {
  return (
    <MainWrapper>
      <Container>
        <SideBar />
      </Container>
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
