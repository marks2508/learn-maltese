import React from 'react';
import Axios from 'axios';

class FavouritesShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        favourites: {
          questions: [],
          answers: []
        }
      }
    };
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.parmas.id}`)
      .then(res => this.setState({user: res.data}, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        {/* <Card question={this.state.card.questions[this.state.index]} answer={this.state.card.answers[this.state.index]}
        />
        <button onClick={() => this.setState({ showing: !showing })}>Reveal</button>
        { showing ? <div>{this.state.card.answers[this.state.index]}</div>
          : null
        }
        <button onClick={this.getNextQuestion}>Next question</button>
        <button onClick={this.addFavsToDB}>Add word to favourites</button>
        <h1>{this.state.favourites.questions}</h1>
        <h1>{this.state.favourites.answers}</h1> */}
      </div>
    );
  }

}
