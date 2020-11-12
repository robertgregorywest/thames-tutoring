/* eslint-disable comma-dangle */
import React from 'react';
import ShapeSection, { gradients } from '../ShapeSection';
import CostOption from '../CostOption';
import Course from '../Course';
import './listingBlock.scss';

const ListingBlock = ({ items, useShape, fullWidth }) => {
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
        break;
      }
      case 'course': {
        components.push(
          <div className="grid-cell" key={item.id}>
            <Course course={item} />
          </div>
        );
        break;
      }
      // no default
    }
  });

  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

  return (
    <ConditionalWrapper
      condition={useShape}
      wrapper={(children) => (
        <ShapeSection flippedBottom gradient={gradients.BLUE}>
          {children}
        </ShapeSection>
      )}
    >
      <div
        className={`${
          fullWidth ? `listingBlock--full` : 'listingBlock--content-width'
        }`}
      >
        <div className="grid grid--gutters grid--full large-grid--fit">
          {components}
        </div>
      </div>
    </ConditionalWrapper>
  );
};

export default ListingBlock;
