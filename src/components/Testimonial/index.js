import React from 'react';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import ShapeSection from '../ShapeSection';
import './testimonial.scss';

const Testimonial = ({ testimonial, attribution }) => (
  <div className="testimonial">
    <ShapeSection>
      <div className="testimonial__wrapper">
        <div className="testimonial-quote">
          <RichTextElement value={testimonial.value} />
        </div>
        <p className="testimonial__attribution">– {attribution}</p>
      </div>
    </ShapeSection>
  </div>
);

export default Testimonial;
