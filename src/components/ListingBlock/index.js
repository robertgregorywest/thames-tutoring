/* eslint-disable comma-dangle */
import React from 'react';
import CostOption from '../CostOption';

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
    <>
      <h2>{title}</h2>
      <div className="grid grid--gutters">
        {components.map((component) => (
          <div className="grid-cell">{component}</div>
        ))}
      </div>
    </>
  );
};

export default ListingBlock;
