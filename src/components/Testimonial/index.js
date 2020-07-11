import React from 'react';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import './style.scss';

const Testimonial = ({ testimonial, attribution }) => (
  <div className="testimonial">
    <div className="testimonial-quote">
      <RichTextElement value={testimonial.value} />
    </div>
    <p className="testimonial__attribution">– {attribution}</p>
  </div>
);

export default Testimonial;
