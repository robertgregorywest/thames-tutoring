import React from 'react';
import { Link } from 'gatsby';
import '../../assets/scss/init.scss';
import '../../assets/scss/variables.scss';
import './styles.scss';
import './hamburger.scss';

const Layout = props => {
  const { title, children } = props;
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className={`site-wrapper ${toggleNav ? 'site-head-open' : ''}`}>
      <header className="site-head">
        <div className="site-head-container">
          <div className="site-head-center">
            <Link className="site-head-logo" to="/">
              {title}
            </Link>
          </div>
          <nav id="swup" className="site-head-right">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to="/tuition">Tuition</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <a
            className="nav-burger"
            href="#"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
        </div>
      </header>
      <main className="site-main">
        {children}
      </main>
      <footer className="site-foot">
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Thames Tutoring
      </footer>
    </div>
  );
};

export default Layout;
