import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import './costOption.scss';

const CostOption = ({ title, cost, unit, details, cta }) => (
  <div className="costOption">
    <div className="costOption__card">
      <div className="costOption__header">
        <p className="costOption__title">{title}</p>
        <p className="costOption__cost">{cost}</p>
        <p className="costOption__unit">{unit}</p>
        <p className="costOption__details">{details}</p>
      </div>
      <div className="costOption__cta">
        <a href="#" className="costOption__link cta-secondary">
          {cta}
        </a>
      </div>
    </div>
  </div>
);

CostOption.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  cta: PropTypes.string,
};

CostOption.defaultProps = {
  cta: 'Sign up',
};

export const fragmentQuery = graphql`
  fragment CostOptionInfo on kontent_item_cost_option {
    id
    elements {
      title {
        value
      }
      details {
        value
      }
      cost {
        value
      }
      unit {
        value
      }
    }
    system {
      codename
      type
    }
  }
`;

export default CostOption;
