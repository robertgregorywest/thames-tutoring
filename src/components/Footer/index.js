/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/logos/logo-black.svg';
import './style.scss';

const Footer = () => (
  <footer className="site-foot">
    <div className="site-foot-left">
      <Link className="footer-logo" to="/">
        <img src={logo} alt="Thames Tutoring Logo" />
        Thames Tutoring
      </Link>
      <p>
        Made with
        {' '}
        <Link
          to="https://kontent.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kentico Kontent
        </Link>
        {/* {' '} */}
      </p>
      <div>
        <nav className="social-icons">
          <a
            href="https://www.facebook.com/thamestutoring/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons__wrapper"
            aria-label="Facebook"
          >
            <svg className="social-icons__icon" viewBox="0 0 16 28">
              <title>Facebook</title>
              <path d="M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/thamestutoring"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons__wrapper"
            aria-label="Twitter"
          >
            <svg
              className="social-icons__icon social-icons__icon--twitter"
              viewBox="0 0 26 26"
            >
              <title>Twitter</title>
              <path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/thames_tutoring/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons__wrapper"
            aria-label="Instagram"
          >
            <svg className="social-icons__icon" viewBox="0 0 24 24">
              <title>Instagram</title>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </nav>
      </div>
    </div>
    <div className="site-foot-right">
      <div className="site-foot-right-container">
        <div className="site-foot-right-container__col">
          <nav className="site-foot-nav">
            <ul role="menu">
              <li role="menuitem">
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
              <li role="menuitem">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="site-foot-right-container__col">
          <ul role="menu">
            <li role="menuitem">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li role="menuitem">
              <Link to="/">Safeguarding Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
