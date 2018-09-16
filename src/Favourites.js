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
  height: 'calc(100vh - 200px'
};

class FavouritesShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        favourites: [{
          questions: [],
          answers: []
        }]
      },
      index: 0
    };
    this.getNextQuestion = this.getNextQuestion.bind(this);
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${Auth.getPayload().userId}`)
      .then(res => this.setState({ user: res.data}, () => console.log('state:',this.state.user.favourites)))
      .catch(err => console.log(err));
  }

  getNextQuestion() {
    this.setState({
      index: this.state.index + 1,
      showing: false
    });
    if (this.state.index === this.state.user.favourites[0].questions.length) {
      this.setState({
        index: 0
      });
    }
  }

  _renderObject() {
    const { showing } = this.state;
    return Object.entries(this.state.user.favourites).map(([key, value]) => {
      return (
        <div key={key}>
          <Card
            question={value.questions[this.state.index]}
            answer={value.answers[this.state.index]}
          />
          <button onClick={() => this.setState({ showing: !showing })}>Reveal</button>
          { showing ? <div>{value.answers[this.state.index]}</div>
            : null
          }
          <button onClick={this.getNextQuestion}>Next question</button>
        </div>
      );
    });
  }

  render() {

    return (
      <div style={background}>
        <div>
          <h1>Hello</h1>
          {this._renderObject()}
        </div>
      </div>
    );
  }
}

export default FavouritesShow;
