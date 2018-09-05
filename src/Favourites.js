import React from 'react';
import Axios from 'axios';
import Card from './Card';


class FavouritesShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        favourites: {
          questions: [],
          answers: []
        }
      },
      index: 0
    };
  }


  componentWillMount() {
    Axios
      .get(`api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data}, () => console.log(this.state)))
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
      </div>
    );
  }
}

export default FavouritesShow;
