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
        <div className="profile">
          <h1 className="welcomeback">Welcome back {this.state.users.name}!</h1>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <Link to="/cards"><button className="btn btn-primary btns">Learn more vocab</button></Link>
                <Link to={`/users/${this.state.users.id}/favourites`}><button className="btn btn-warning btns">Go to your favourites</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileShow;
