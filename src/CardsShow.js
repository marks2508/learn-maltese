import React from 'react';
import Axios from 'axios';
import Card from './Card';
import Auth from './lib/Auth';
import Backgroundpic from './assets/malta.jpg';

const background = {
  background: `url(${Backgroundpic})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: 'calc(100vh - 175px'
};

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
      index: 0
    };
    this.getNextQuestion = this.getNextQuestion.bind(this);
    this.addFavsToDB = this.addFavsToDB.bind(this);
  }

  componentWillMount() {
    Axios
      .get(`/api/cards/${this.props.match.params.id}`)
      .then(res => this.setState({ card: res.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${Auth.getPayload().userId}`, this.state.users, {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ users: res.data }))
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
    console.log(Auth.getPayload().userId);
    Axios
      .post(`/api/users/${Auth.getPayload().userId}/favourites`, { favourites: [
        {
          answers: this.state.users.favourites[0].answers.concat([this.state.card.answers[this.state.index]]),
          questions: this.state.users.favourites[0].questions.concat([this.state.card.questions[this.state.index]])
        }]})
      .then( resp => console.log('response: ',resp))
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render() {
    const { showing } = this.state;
    return (
      <div style={background}>
        <Card
          question={this.state.card.questions[this.state.index]}
          answer={this.state.card.answers[this.state.index]}
        />
        <div className="btns">
          <button className="btn btn-primary" onClick={this.getNextQuestion}>Next question</button>
          <button className="btn btn-warning" onClick={this.addFavsToDB}>Add word to favourites</button>
          <button className="btn btn-danger" onClick={() => this.setState({ showing: !showing })}>Reveal answer</button>
        </div>
        { showing ? <div className="answer">{this.state.card.answers[this.state.index]}</div>
          : null
        }
      </div>
    );
  }
}

export default CardsShow;
