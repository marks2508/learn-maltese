import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from './lib/Auth';

class ProfileShow extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${Auth.getPayload().userId}`)
      .then(res => this.setState({users: res.data}, () => console.log(this.state.users)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="background">
        <h1>Welcome back {this.state.users.name}!</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text2">Learn some more vocab</h3>
              <Link to="/cards"><button>Vocab</button></Link>
            </div>
            <div className="col-md-6">
              <h3>Re-visit your favourites</h3>
              <Link to={`/users/${this.state.users.id}/favourites`}><button>Favourites</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileShow;
