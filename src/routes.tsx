import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Intro from './pages/Intro';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Intro} />
    </BrowserRouter>
  );
};

export default Routes;
