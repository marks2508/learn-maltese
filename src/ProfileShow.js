import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from './lib/Auth';
// import CardsIndex  from './CardsIndex';

class ProfileShow extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${Auth.getPayload().userId}`)
      .then(res => this.setState({users: res.data}, () => console.log(this.state.users)))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Link to="/cards"><button>Vocab</button></Link>
        <Link to={`/users/${this.state.users.id}/favourites`}><button>Favourites</button></Link>
      </div>
    );
  }
}





export default ProfileShow;
