import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
  <div>
    <h2>This is Portfolio</h2>
    <p>The list of portfolio items:</p>
    <ul>
      <li><Link to="portfolio/1">Item 1</Link></li>
      <li><Link to="portfolio/2">Item 2</Link></li>
      <li><Link to="portfolio/3">Item 3</Link></li>
    </ul>
  </div>
);

export default Portfolio;