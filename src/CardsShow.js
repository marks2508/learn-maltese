import React, {Component} from 'react';
import Axios from 'axios';
import Card from './Card';
import Auth from './lib/Auth';

class CardsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        category: [],
        questions: [],
        answers: []
      },
      users: {
        favourites: {
          questions: [],
          answers: []
        }
      },
      index: 0,
      favourites: {
        questions: [],
        answers: []
      }
    };
    this.getNextQuestion = this.getNextQuestion.bind(this);
    // this.addToFavourites = this.addToFavourites.bind(this);
    this.addFavsToDB = this.addFavsToDB.bind(this);
  }


  componentWillMount() {
    Axios
      .get(`/api/cards/${this.props.match.params.id}`)
      .then(res => this.setState({ card: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    console.log('didmount');
    Axios
      .get('/api/users/', this.state.users, {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ users: res.data }, () => console.log(this.state.users[0].favourites[0].questions )))
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

  addFavsToDB (){
    const id = this.state.users[0].id;
    console.log(id);
    console.log('addFavsToDB function running');
    console.log('state:', this.state.users );
    Axios
      .post(`/api/users/${this.state.users[0].id}/favourites`, { favourites: [
        {
          answers: [this.state.card.answers[this.state.index]],
          questions: [this.state.card.questions[this.state.index]]
        }]})
      .then( resp => console.log('response: ',resp) )
      .catch(err => this.setState({errors: err.response.data.errors}));
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
        <button onClick={this.addFavsToDB}>Add word to favourites</button>
      </div>
    );
  }
}

export default CardsShow;
