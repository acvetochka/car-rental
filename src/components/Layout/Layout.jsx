import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from 'components/SideBar/SideBar';
import { Main, MainWrapper } from './Layout.styled';

function Layout() {
  return (
    <MainWrapper>
      <SideBar />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      {/* <footer>2023 | Alona Kuznietsova</footer> */}
    </MainWrapper>
  );
}

export default Layout;
