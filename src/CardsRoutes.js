import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CardsIndex from './CardsIndex';
import CardsShow from './CardsShow';

const CardsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/cards" component={CardsIndex} />
      <Route path="/cards/:id" component={CardsShow} />
    </Switch>
  );
};

export default CardsRoutes;
