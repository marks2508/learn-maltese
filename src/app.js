import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import Register from './auth/Register';
import WordsIndex from './WordsIndex';
import ProfileShow from './ProfileShow';
import Homepage from './Homepage';
import Navbar from './Navbar';
import CardsShow from './CardsShow';
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
              <Route path="/cards" component={WordsIndex} />
              <Route path="/cards/:id" component={CardsShow} />
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
