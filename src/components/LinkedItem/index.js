import React from 'react';
import Testimonial from '../Testimonial';
import ListingBlock from '../ListingBlock';

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
        <ListingBlock
          title={linkedItem.elements.listing_title.value}
          items={linkedItem.elements.items.value}
        />
      );
    }
    default:
      return null;
  }
};

export default LinkedItem;
