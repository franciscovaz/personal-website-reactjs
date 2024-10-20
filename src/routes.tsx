import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Intro from './pages/Intro';
import Home from './pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter basename="/personal-website-reactjs">
      <Route path="/" exact component={Intro} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
};

export default Routes;
