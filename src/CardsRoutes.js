import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WordsIndex from './WordsIndex';
import CardsShow from './CardsShow';

const CardsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/cards" component={WordsIndex} />
      <Route path="/cards/:id" component={CardsShow} />
    </Switch>
  );
};

export default CardsRoutes;
