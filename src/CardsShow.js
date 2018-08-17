import React from 'react';
import Axios from 'axios';


import Auth from './lib/Auth';

class CardsShow extends React.Component {
  state = {
    cards: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/cards/${this.props.match.params.id}`)
      .then(res => this.setState({ card: res.data }, () => console.log('hello world')))
      .catch(err => console.log(err));
  }

  // deleteCard = () => {
  //   Axios
  //     .delete(`/api/cards/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}` }})
  //     .then(() => this.props.history.push('/'))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>Hello world</h1>
          {/* <h3>{this.state.card.category}</h3> */}
        </div>
      </div>
    );
  }
}

export default CardsShow;
