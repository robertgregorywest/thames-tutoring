import React from 'react';
import { graphql } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import ShapeSection from '../ShapeSection';
import './testimonial.scss';

const Testimonial = ({ testimonial }) => (
  <ShapeSection>
    <div className="testimonial">
      <div className="testimonial-quote">
        <RichTextElement value={testimonial.value} />
      </div>
    </div>
  </ShapeSection>
);

export const fragmentQuery = graphql`
  fragment TestimonialInfo on kontent_item_testimonial {
    id
    elements {
      testimonial {
        value
      }
    }
  }
`;

export default Testimonial;
