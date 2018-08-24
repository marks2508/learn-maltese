import React, {Component} from 'react';
import Axios from 'axios';
import Card from './Card';


class CardsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        category: [],
        questions: [],
        answers: []
      },
      index: 0,
      favourites: {
        questions: [],
        answers: []
      }
    };
    this.getNextQuestion = this.getNextQuestion.bind(this);
    this.addToFavourites = this.addToFavourites.bind(this);
  }

  componentWillMount() {
    Axios
      .get(`/api/cards/${this.props.match.params.id}`)
      .then(res => this.setState({ card: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  getNextQuestion() {
    this.setState({
      index: this.state.index + 1,
      showing: false
    });
    if (this.state.index === this.state.card.questions.length) {
      this.setState({
        index: 0
      });
    }
  }

  addToFavourites() {
    this.state.favourites.questions.push(this.state.card.questions[this.state.index]); this.state.favourites.answers.push(this.state.card.answers[this.state.index]);
  }



  render() {

    const { showing } = this.state;

    return (
      <div>
        <h1>{this.state.card.category}</h1>
        <Card question={this.state.card.questions[this.state.index]} answer={this.state.card.answers[this.state.index]}
        />
        <button onClick={() => this.setState({ showing: !showing })}>Reveal</button>
        { showing ? <div>{this.state.card.answers[this.state.index]}</div>
          : null
        }
        <button onClick={this.getNextQuestion}>Next question</button>
        <button onClick={this.addToFavourites}>Add word to favourites</button>
        <h1>{this.state.favourites.questions}</h1>
        <h1>{this.state.favourites.answers}</h1>
      </div>
    );
  }
}


export default CardsShow;
