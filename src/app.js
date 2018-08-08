import React from 'react';
import ReactDOM from 'react-dom';
import {Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import VocabIndex from './WordsIndex';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Welcome</h1>
          <h2>The best site to help you learn Maltese</h2>
          <h3><Link to="/words">Learn Vocab</Link></h3>
          <Switch>
            <Route exact path="/words" component={VocabIndex} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
