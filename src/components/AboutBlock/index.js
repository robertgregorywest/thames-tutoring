import React from 'react';
import { Link } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import ShapeSection, { gradients } from '../ShapeSection';
import './aboutBlock.scss';

const AboutBlock = ({ title, richText }) => (
  <ShapeSection flippedBottom gradient={gradients.PURPLE}>
    <div className="main-wrapper__width-90">
      <div className="grid grid--full large-grid--fit about">
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
      </div>
    </div>
  </ShapeSection>
);

export default AboutBlock;
