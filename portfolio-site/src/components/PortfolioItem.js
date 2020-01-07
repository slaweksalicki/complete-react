import React from 'react';

const PortfolioItem = (props) => (
  <div>
    <h2>Portfolio Item</h2>
    <p>Portfolio item the id of: <strong>{props.match.params.id}</strong></p>
  </div>
);

export default PortfolioItem;