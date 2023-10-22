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
      {/* <footer>2023 | Alona Kuznietsova</footer> */}
    </MainWrapper>
  );
}

export default Layout;
