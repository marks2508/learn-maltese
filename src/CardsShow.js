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

  // addToFavourites(e) {
  //   console.log(e)
  //   console.log("state",typeof this.state.card.questions[this.state.index])
  //
  //   this.setState({ users: { favourites: { questions: this.state.card.questions.concat(this.state.card.questions[this.state.index]) }}})
  //   // this.state.users[0].favourites.questions.push(this.state.card.questions[this.state.index])
  //   // this.state.users[0].favourites.answers.push(this.state.card.answers[this.state.index])
  // }


    // questions.push(this.state.card.questions[this.state.index]);
    // this.state.favourites.answers.push(this.state.card.answers[this.state.index]);

  addFavsToDB (){
    const id = this.state.users[0].id;
    console.log(id);
    // this.addToFavourites()

    console.log('addFavsToDB function running');
    console.log('state:', this.state.users )
    Axios({
        method: 'put',
        url: `/api/users/${this.state.users[0].id}/favourites`,
        data: { favourites: [
          {
          answers: [this.state.card.answers[this.state.index]],
          questions: [this.state.card.questions[this.state.index]]
          }
        ]}
}).then( resp => console.log('response: ',resp) )
  .catch(err => this.setState({errors: err.response.data.errors}));
      // .post(`/api/users/${this.state.users[0].id}/favourites`,
      //    , { headers: {'Authorization': `Bearer ${Auth.getToken()}`}})
      // .then( resp => console.log(resp) )
      // .catch(err => this.setState({errors: err.response.data.errors}));
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
        {/* <h1>{this.state.user.favourites}</h1>
        <h1>{this.state.favourites.answers}</h1> */}
          {/* {this.state.favourites.map(favourite => {
            return(
              <div key={favourite.id} className="image-tile col-md-4 col-sm-6 col-xs-12">

                <h3>{favourite.name}</h3>
              </div>
            );
          })} */}
      </div>
    );
  }
}


export default CardsShow;
