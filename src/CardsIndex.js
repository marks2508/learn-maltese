import React from 'react';
import Axios from 'axios';
import { Link  } from 'react-router-dom';
import Backgroundpic from './assets/malta.jpg';

const background = {
  background: `url(${Backgroundpic})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: 'calc(100vh - 175px'
};

class CardsIndex extends React.Component {
  state = {
    cards: [],
    sortBy: 'favourites',
    sortDirection: 'desc',
    query: '',
    languageFilter: ''
  }

  componentWillMount() {
    Axios
      .get('/api/cards')
      .then(res => this.setState({ cards: res.data },() => console.log(this.state)))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div style={background}>
        <h1 className="indexText">Pick a category</h1>
        <div className="container">
          <div className="row">
            {this.state.cards.map(card => {
              return(
                <div key={card.id} className="card card-outline col-md-2">
                  <div className="card-body">
                    <Link to={`/cards/${card.id}`}>
                      <h1 className="card-title">{card.category}</h1>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CardsIndex;
