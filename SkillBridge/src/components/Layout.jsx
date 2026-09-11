import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';

function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="site-shell">
        <Header />
        <Navbar />
        <main id="main-content" className="page">
          <Outlet />
        </main>
        <footer className="site-footer">
          SkillBridge — Frontend demo stage.
        </footer>
      </div>
    </>
  );
}

export default Layout;
