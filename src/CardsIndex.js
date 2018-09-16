import React from 'react';
import Axios from 'axios';
import { Link  } from 'react-router-dom';
import Backgroundpic from './assets/malta.jpg';


const background = {
  background: `url(${Backgroundpic})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: 'calc(100vh - 200px'
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
        <h1>Choose one of the categories to learn new words</h1>
        {this.state.cards.map(card => {
          return(
            <div key={card.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
              <Link to={`/cards/${card.id}`}>
                <h1>{card.category}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardsIndex;
