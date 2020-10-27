import React from 'react';
import { Link } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import './aboutBlock.scss';

const AboutBlock = ({ title, richText }) => (
  <section className="grid grid--full large-grid--fit about">
    <div className="custom-shape-divider-top-1594982357">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
          className="shape-fill"
        />
      </svg>
    </div>
    <div className="grid-cell">
      <h2 className="about__title">{title}</h2>
    </div>
    <div className="grid-cell about__text">
      <RichTextElement value={richText} />
      <p>
        <Link to="/about" className="about__link cta-secondary">
          Read more about our approach
        </Link>
      </p>
    </div>
    <div className="custom-shape-divider-bottom-1594916332">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        />
      </svg>
    </div>
  </section>
);

export default AboutBlock;
