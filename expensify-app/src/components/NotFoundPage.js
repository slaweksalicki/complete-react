import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404!!!! This is from my NotFoundPage component
    <br />
    <Link to="/">home</Link>
  </div>
);

export default NotFoundPage;