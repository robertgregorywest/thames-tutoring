import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Footer from '../Footer';
import '../../assets/scss/global.scss';
import '../../assets/scss/variables.scss';
import './layout.scss';
import './hamburger.scss';
import logo from '../../assets/logos/logo.svg';

const Layout = (props) => {
  const { title, description, children } = props;
  const [toggleNav, setToggleNav] = React.useState(false);
  const data = useStaticQuery(graphql`
    query SiteQuery {
      kontentItemHome {
        elements {
          site_title {
            value
          }
        }
      }
    }
  `);
  const siteTitle = data.kontentItemHome.elements.site_title.value;
  const titleTemplate = `${siteTitle} - %s`;

  return (
    <div className={`site-wrapper ${toggleNav ? 'site-head-open' : ''}`}>
      <Helmet defaultTitle={siteTitle} titleTemplate={titleTemplate}>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <header className="site-head">
        <div className="site-head-container">
          <div className="site-head-left">
            <Link className="site-head__logo" to="/">
              <img
                src={logo}
                alt="Thames Tutoring Logo"
                className="site-head__logo-image"
              />
              {siteTitle}
            </Link>
          </div>
          <nav className="site-head-right">
            <ul className="site-head__nav" role="menu">
              <li role="menuitem" className="site-head__nav-item">
                <Link to="/" className="site-head__link nav-current">
                  Home
                </Link>
              </li>
              <li role="menuitem" className="site-head__nav-item">
                <Link to="/about" className="site-head__link">
                  About
                </Link>
              </li>
              <li role="menuitem" className="site-head__nav-item">
                <Link to="/tuition" className="site-head__link">
                  Tuition
                </Link>
              </li>
              <li role="menuitem" className="site-head__nav-item">
                <Link to="/courses" className="site-head__link">
                  Courses
                </Link>
              </li>
              <li role="menuitem" className="site-head__nav-item">
                <Link to="/blog" className="site-head__link">
                  Blog
                </Link>
              </li>
              <li role="menuitem" className="site-head__nav-item">
                <Link
                  to="/contact"
                  className="site-head__link site-head__link--contact"
                >
                  Contact
                </Link>
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
