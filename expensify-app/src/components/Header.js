import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h3>Expensify</h3>
    <ul>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </ul>
  </header>
);

export default Header;