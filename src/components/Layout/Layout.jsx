import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, MainWrapper } from './Layout.styled';
import SideBar from 'components/SideBar/SideBar';

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
