import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import Register from './auth/Register';
import VocabIndex from './WordsIndex';
import Homepage from './Homepage';
import Navbar from './Navbar';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/words" component={VocabIndex} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/" component={Homepage} />
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
