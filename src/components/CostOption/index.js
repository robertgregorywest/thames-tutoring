import React from 'react';
import PropTypes from 'prop-types';
import './costOption.scss';

const CostOption = ({ title, cost, cta }) => (
  <div className="costOption">
    <p className="costOption__title">{title}</p>
    <p className="costOption__cost">{cost}</p>
    <p className="costOption__cta">
      <a href="#" className="costOption__link cta-secondary">
        {cta}
      </a>
    </p>
  </div>
);

CostOption.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  cta: PropTypes.string,
};

CostOption.defaultProps = {
  cta: 'Sign up',
};

export default CostOption;
