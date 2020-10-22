import React from 'react';
import Testimonial from '../Testimonial';
import SubjectAreaListing from '../SubjectAreasListing';

const LinkedItem = ({ linkedItem }) => {
  const type = linkedItem.system.type;

  switch (type) {
    case 'testimonial': {
      return (
        <Testimonial
          testimonial={linkedItem.elements.testimonial}
          attribution={linkedItem.elements.attribution.value}
        />
      );
    }
    case 'listing_block': {
      return (
        <SubjectAreaListing
          title={linkedItem.elements.listing_title.value}
          subjectAreas={linkedItem.elements.items.value}
        />
      );
    }
    default:
      return null;
  }
};

export default LinkedItem;
