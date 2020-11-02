import React from 'react';
import './costOption.scss';

const CostOption = ({ title, cost }) => (
  <div className="costOption">
    <p className="costOption__title">{title}</p>
    <p className="costOption__cost">{cost}</p>
    <p className="costOption__cta">
      <a href="#" className="costOption__link cta-secondary">
        Sign up
      </a>
    </p>
  </div>
);

export default CostOption;
