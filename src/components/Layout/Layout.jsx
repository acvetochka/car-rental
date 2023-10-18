import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <aside>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </aside>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer>2023 | Alona Kuznietsova</footer> */}
    </div>
  );
}

export default Layout;
