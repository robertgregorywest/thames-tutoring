/* eslint-disable comma-dangle */
import React from 'react';
import ShapeSection from '../ShapeSection';
import CostOption from '../CostOption';
import './listingBlock.scss';

const ListingBlock = ({ title, items }) => {
  const components = [];
  items.forEach((item) => {
    switch (item.system.type) {
      case 'cost_option': {
        components.push(
          <div className="grid-cell" key={item.id}>
            <CostOption
              title={item.elements.title.value}
              details={item.elements.details.value}
              cost={item.elements.cost.value}
              unit={item.elements.unit.value}
            />
          </div>
        );
      }
      // no default
    }
  });

  return (
    <div className="listingBlock">
      <ShapeSection flippedBottom>
        <div className="listingBlock__wrapper">
          <h2 className="listingBlock__title">{title}</h2>
          <div className="grid grid--gutters">{components};</div>
        </div>
      </ShapeSection>
    </div>
  );
};

export default ListingBlock;
