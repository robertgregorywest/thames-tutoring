import React from 'react';
import { Link } from 'gatsby';
import Footer from '../Footer';
import '../../assets/scss/global.scss';
import '../../assets/scss/variables.scss';
import './style.scss';
import './hamburger.scss';
import logo from '../../assets/logos/logo.svg';

const Layout = (props) => {
  const { title, children } = props;
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className={`site-wrapper ${toggleNav ? 'site-head-open' : ''}`}>
      <header className="site-head">
        <div className="site-head-container">
          <div className="site-head-left">
            <Link className="site-head-logo" to="/">
              <img src={logo} alt="Thames Tutoring Logo" />
              {title}
            </Link>
          </div>
          <nav className="site-head-right">
            <ul className="nav" role="menu">
              <li className="nav-current" role="menuitem">
                <Link to="/">Home</Link>
              </li>
              <li role="menuitem">
                <Link to="/about">About</Link>
              </li>
              <li role="menuitem">
                <Link to="/tuition">Tuition</Link>
              </li>
              <li role="menuitem">
                <Link to="/courses">Courses</Link>
              </li>
              <li role="menuitem">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav-contact" role="menuitem">
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
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
