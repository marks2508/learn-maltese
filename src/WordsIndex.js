import React from 'react';
import Axios from 'axios';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import  Numbers  from './Numbers';

class WordsIndex extends React.Component {
  state = {
    words: []
  }
  componentDidMount() {
    Axios
      .get('/api/cards')
      .then(res => this.setState({ words: res.data }, () => console.log(this.state.words)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Welcome to the vocab section</h1>
        <div className="row">
          <div className="page-banner col-md-12">
            <Numbers />
          </div>
        </div>
      </div>

    );
  }
}

export default WordsIndex;
