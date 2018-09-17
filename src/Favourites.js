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
          <div className="btns">
            <button className="btn btn-primary" onClick={this.getNextQuestion}>Next question</button>
            <button className="btn btn-danger" onClick={() => this.setState({ showing: !showing })}>Reveal</button>
          </div>
          { showing ? <div className="answer">{value.answers[this.state.index]}</div>
            : null
          }
        </div>
      );
    });
  }

  render() {

    return (
      <div style={background}>
        <div>
          {this._renderObject()}
        </div>
      </div>
    );
  }
}

export default FavouritesShow;
