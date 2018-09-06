import React from 'react';
import Axios from 'axios';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Auth from './lib/Auth';
// import CardsIndex  from './CardsIndex';

class ProfileShow extends React.Component {
  state = {
    user: {
      id: ''
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${Auth.getPayload().userId}`)
      .then(res => this.setState({user: res.data}, () => console.log(this.state.user.id)))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Link to="/cards"><button>Vocab</button></Link>
        <Link to={`/users/${this.state.user.id}/favourites`}><button>Favourites</button></Link>
      </div>
    );
  }
}





export default ProfileShow;
