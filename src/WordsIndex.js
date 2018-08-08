import React from 'react';
import Axios from 'axios';
import { Link, BrowserRouter as Router } from 'react-router-dom';


class VocabIndex extends React.Component {
  state = {
    words: []
  }
  componentDidMount() {
    Axios
      .get('/api/words')
      .then(res => this.setState({ words: res.data }, () => console.log(this.state.words)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Welcome to the vocab section</h1>
        <div className="row">
          <div className="page-banner col-md-12">
          </div>
          { this.state.words.map(word =>
            <div key={word.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
              <h3>{word.word}</h3>
              <p>{word.translation}</p>
            </div>
          )}
        </div>
      </div>

    );
  }
}

export default VocabIndex;
