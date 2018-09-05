import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CardsIndex from './CardsIndex';
import CardsShow from './CardsShow';
import Favourites from './Favourites';

const CardsRoutes = () => {

  return (
    <Switch>
      <Route exact path="/cards" component={CardsIndex} />
      <Route path="/cards/:id" component={CardsShow} />
      <Route path="/users/:id/favourites" component={Favourites} />
    </Switch>
  );
};

export default CardsRoutes;
