import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from 'components/SideBar/SideBar';
import { Main, MainWrapper } from './Layout.styled';
import Footer from 'components/Footer/Footer';

function Layout() {
  return (
    <MainWrapper>
      <SideBar />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </MainWrapper>
  );
}

export default Layout;
