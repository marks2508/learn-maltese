import React from 'react';
import Axios from 'axios';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import  Numbers  from './Numbers';
import Card from './Card';
import _ from 'lodash';
import Auth from './lib/Auth';

class WordsIndex extends React.Component {
  state = {
    cards: [],
    sortBy: 'favourites',
    sortDirection: 'desc',
    query: '',
    languageFilter: ''
  }

  componentDidMount() {
    Axios
      .get('/api/cards', {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => this.setState({ cards: res.data },() => console.log(this.state)))
      .catch(err => console.log(err));
  }

  handleSort = (e) => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({ sortBy, sortDirection });
  }

  handleSearch = (e) => {
    this.setState({ query: e.target.value });
  }

  handleLanguageFilter = (e) => {
    this.setState({ languageFilter: e.target.value });
  }

  render() {
    const { sortBy, sortDirection, query, languageFilter } = this.state;
    const regex = new RegExp(query, 'i');
    const languageRegex = new RegExp(languageFilter);

    const orderedCards = _.orderBy(this.state.cards, [sortBy], [sortDirection]);
    const searchFilteredCards = _.filter(orderedCards, (card) => regex.test(card.name));
    const cards = _.filter(searchFilteredCards, (card) => languageRegex.test(card.language));

    return(
      <div>
        <h1>Choose a category to learn new words</h1>
        {/* <SearchBar
          handleSort={this.handleSort}
          handleSearch={this.handleSearch}
          handleLanguageFilter={this.handleLanguageFilter}
        /> */}
        <div className="grid profile">
          { cards.map(card =>
            <Card

              card={card}
              key={card.id}
            />
          )}
        </div>
      </div>
    );
  }
}

export default WordsIndex;
