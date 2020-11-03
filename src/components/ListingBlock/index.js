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
          <CostOption
            title={item.elements.title.value}
            cost={item.elements.cost.value}
          />
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
          <div className="grid grid--gutters">
            {components.map((component) => (
              <div className="grid-cell">{component}</div>
            ))}
          </div>
        </div>
      </ShapeSection>
    </div>
  );
};

export default ListingBlock;
