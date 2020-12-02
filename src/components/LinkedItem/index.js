import React from 'react';
import Testimonial from '../Testimonial';
import ListingBlock from '../ListingBlock';

const LinkedItem = ({ linkedItem }) => {
  const type = linkedItem.system.type;

  switch (type) {
    case 'testimonial': {
      return <Testimonial testimonial={linkedItem.elements.testimonial} />;
    }
    case 'listing_block': {
      return (
        <ListingBlock
          items={linkedItem.elements.items.value}
          useShape={
            linkedItem.elements.shape_dividers.value[0].codename === 'yes'
          }
          backgroundGradient={
            linkedItem.elements.background_gradient.value[0].codename
          }
          fullWidth={
            linkedItem.elements.width.value[0].codename === 'full_width'
          }
        />
      );
    }
    default:
      return null;
  }
};

export default LinkedItem;
