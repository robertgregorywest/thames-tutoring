/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import MenuItem from './menuItem';
import MenuItemDropdown from './menuItemDropdown';
import Hamburger from './hamburger';
import Footer from '../Footer';
import '../../assets/scss/global.scss';
import '../../assets/scss/styleVariables.scss';
import './layout.scss';
import './hamburger.scss';
import './menuDropdown.scss';
import logo from '../../assets/logos/logo.svg';

const Layout = ({
  title,
  metaTitle,
  metaDescription,
  introduction,
  children,
}) => {
  const [navIsVisible, setnavIsVisible] = useState(false);
  const [subnavIsVisible, setSubnavIsVisible] = useState(false);

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
    <div className={`site-wrapper${navIsVisible ? ' site-head-open' : ''}`}>
      <Helmet defaultTitle={siteTitle} titleTemplate={titleTemplate}>
        <html lang="en" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <div className="site-head">
        <div className="site-head-container">
          <div className="site-head-left">
            <Link className="site-head__logo" to="/">
              <img
                src={logo}
                alt={siteTitle}
                className="site-head__logo-image"
              />
              {siteTitle}
            </Link>
          </div>
          <nav className="site-head-right">
            <ul className="site-head__nav" role="menu">
              <MenuItem to="/" text="Home" />
              <MenuItem to="/about" text="About" />
              <MenuItem
                to="#"
                text="Tuition"
                onClickHandler={() => setSubnavIsVisible(!subnavIsVisible)}
              >
                <div
                  className={`menu-dropdown${
                    subnavIsVisible ? ' menu-dropdown--open' : ''
                  }`}
                >
                  <div className="menu-dropdown__arrow" />
                  <ul
                    className="menu-dropdown__list"
                    onMouseLeave={() => {
                      setSubnavIsVisible(false);
                    }}
                    hidden={!subnavIsVisible}
                  >
                    <MenuItemDropdown
                      to="/science_tuition"
                      title="Science Tuition"
                      text="We provide 1-2-1 and small group tuition in Maths for all abilities."
                    />
                    <MenuItemDropdown
                      to="/maths_tuition"
                      title="Maths Tuition"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                    <MenuItemDropdown
                      to="/english_tuition"
                      title="English Tuition"
                      text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit"
                    />
                  </ul>
                </div>
              </MenuItem>
              <MenuItem to="/courses" text="Courses" />
              <MenuItem to="/blog" text="Blog" />
              <MenuItem
                to="/contact"
                text="Contact"
                linkClassName="site-head__link--contact"
                skew
              />
            </ul>
          </nav>
          <Hamburger onClickHandler={() => setnavIsVisible(!navIsVisible)} />
        </div>
        <div className="mobile-nav-container">
          <nav className="mobile-nav">
            <ul className="mobile-nav__list" role="menu">
              <MenuItem to="/" text="Home" />
              <MenuItem to="/about" text="About" />
              <MenuItem to="/science_tuition" text="Science Tuition" />
              <MenuItem to="/maths_tuition" text="Maths Tuition" />
              <MenuItem to="/english_tuition" text="English Tuition" />
              <MenuItem to="/courses" text="Courses" />
              <MenuItem to="/blog" text="Blog" />
              <MenuItem to="/contact" text="Contact" skew />
            </ul>
          </nav>
        </div>
      </div>
      <Header title={title} richText={introduction} />
      <main className="main-wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
