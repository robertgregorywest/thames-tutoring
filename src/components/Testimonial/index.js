import React from 'react';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import './testimonial.scss';

const Testimonial = ({ testimonial, attribution }) => (
  <div className="testimonial">
    <div className="custom-shape-divider-bottom-1594916332">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        />
      </svg>
    </div>
    <div className="testimonial__wrapper">
      <div className="testimonial-quote">
        <RichTextElement value={testimonial.value} />
      </div>
      <p className="testimonial__attribution">– {attribution}</p>
    </div>
  </div>
);

export default Testimonial;
