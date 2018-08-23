import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import Register from './auth/Register';
import ProfileShow from './ProfileShow';
import Homepage from './Homepage';
import Navbar from './Navbar';
import CardsRoutes from './CardsRoutes';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/profile" component={ProfileShow} />
              <Route path="/login" component={Login} />
              <Route exact path="/" component={Homepage} />
              <Route path="/register" component={Register} />
              <CardsRoutes />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
