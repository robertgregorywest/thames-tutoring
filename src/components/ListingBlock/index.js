import React from 'react';
import { graphql } from 'gatsby';
import ShapeSection from '../ShapeSection';
import CostOption from '../CostOption';
import Course from '../Course';
import './listingBlock.scss';

const ListingBlock = ({ items, useShape, fullWidth, backgroundGradient }) => {
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
        <ShapeSection flippedBottom gradient={backgroundGradient}>
          {children}
        </ShapeSection>
      )}
    >
      <div
        className={`${
          fullWidth
            ? `main-wrapper__width-90 listingBlock--full-width`
            : 'listingBlock--content-width'
        }`}
      >
        <div className="grid grid--gutters grid--full large-grid--fit">
          {components}
        </div>
      </div>
    </ConditionalWrapper>
  );
};

export const fragmentQuery = graphql`
  fragment ListingBlockInfo on kontent_item_listing_block {
    id
    elements {
      items {
        value {
          ... on kontent_item_course {
            ...CourseInfo
          }
          ... on kontent_item_cost_option {
            ...CostOptionInfo
          }
        }
      }
      shape_dividers {
        value {
          codename
        }
      }
      background_gradient {
        value {
          codename
        }
      }
      width {
        value {
          codename
        }
      }
    }
    system {
      codename
      type
    }
  }
`;

export default ListingBlock;
