import React from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/logos/logo-black.svg';
import './footer.scss';

const Footer = () => (
  <footer className="site-foot">
    <div className="site-foot-left">
      <Link className="footer-logo" to="/">
        <img src={logo} alt="Thames Tutoring Logo" />
        Thames Tutoring
      </Link>
      <p className="site-foot__contact">
        <a href="mailto:info@thamestutoring.com">info@thamestutoring.com</a>
        <br />
        07555 346594
      </p>
      <nav className="social-icons">
        <a
          href="https://www.facebook.com/thamestutoring/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icons__wrapper"
          aria-label="Facebook"
        >
          <svg className="social-icons__icon" viewBox="0 0 20 20">
            <title>Facebook</title>
            <path d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z" />
          </svg>
        </a>
        <a
          href="https://twitter.com/thamestutoring"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icons__wrapper"
          aria-label="Twitter"
        >
          <svg className="social-icons__icon" viewBox="0 0 20 20">
            <title>Twitter</title>
            <path d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z" />
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
    <div className="site-foot-right">
      <div className="site-foot-right-cell">
        <nav className="site-foot-nav">
          <ul role="menu">
            <li role="menuitem">
              <Link to="/about">About</Link>
            </li>
            <li role="menuitem">
              <Link to="/science_tuition">Science Tuition</Link>
            </li>
            <li role="menuitem">
              <Link to="/maths_tuition">Maths Tuition</Link>
            </li>
            <li role="menuitem">
              <Link to="/english_tuition">English Tuition</Link>
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
      <div className="site-foot-right-cell">
        <nav className="site-foot-nav">
          <ul role="menu">
            <li role="menuitem">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li role="menuitem">
              <Link to="/">Safeguarding Policy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
