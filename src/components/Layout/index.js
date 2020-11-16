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
          contact_email {
            value
          }
          contact_phone {
            value
          }
          subject_areas {
            value {
              ... on kontent_item_subject_area {
                id
                elements {
                  title {
                    value
                  }
                  menu_description {
                    value
                  }
                  url {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const siteTitle = data.kontentItemHome.elements.site_title.value;
  const titleTemplate = `${siteTitle} - %s`;
  const email = data.kontentItemHome.elements.contact_email.value;
  const phoneNumber = data.kontentItemHome.elements.contact_phone.value;
  const subjects = data.kontentItemHome.elements.subject_areas.value;

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
                    {subjects.map((subject) => (
                      <MenuItemDropdown
                        key={subject.elements.url.value}
                        to={`/${subject.elements.url.value}`}
                        title={subject.elements.title.value}
                        text={subject.elements.menu_description.value}
                      />
                    ))}
                  </ul>
                </div>
              </MenuItem>
              <MenuItem to="/courses" text="Courses" />
              {/* <MenuItem to="/blog" text="Blog" /> */}
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
              {subjects.map((subject) => (
                <MenuItem
                  key={subject.elements.url.value}
                  to={`/${subject.elements.url.value}`}
                  text={subject.elements.title.value}
                />
              ))}
              <MenuItem to="/courses" text="Courses" />
              {/* <MenuItem to="/blog" text="Blog" /> */}
              <MenuItem to="/contact" text="Contact" skew />
            </ul>
          </nav>
        </div>
      </div>
      <Header title={title} richText={introduction} />
      <main className="main-wrapper">{children}</main>
      <Footer email={email} phoneNumber={phoneNumber} subjects={subjects} />
    </div>
  );
};

export default Layout;
