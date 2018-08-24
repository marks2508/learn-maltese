import React from 'react';
import Axios from 'axios';
import { Link  } from 'react-router-dom';
// import Auth from './lib/Auth';

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

  // handleSort = (e) => {
  //   const [sortBy, sortDirection] = e.target.value.split('|');
  //   this.setState({ sortBy, sortDirection });
  // }
  //
  // handleSearch = (e) => {
  //   this.setState({ query: e.target.value });
  // }
  //
  // handleLanguageFilter = (e) => {
  //   this.setState({ languageFilter: e.target.value });
  // }

  render() {
    // const { sortBy, sortDirection, query, languageFilter } = this.state;
    // const regex = new RegExp(query, 'i');
    // const languageRegex = new RegExp(languageFilter);
    //
    // const orderedCards = _.orderBy(this.state.cards, [sortBy], [sortDirection]);
    // const searchFilteredCards = _.filter(orderedCards, (card) => regex.test(card.name));
    // const cards = _.filter(searchFilteredCards, (card) => languageRegex.test(card.language));

    return(
      <div>
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
