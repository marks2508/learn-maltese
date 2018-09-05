import React from 'react';
import Axios from 'axios';
import { Link, BrowserRouter as Router } from 'react-router-dom';
// import CardsIndex  from './CardsIndex';

class ProfileShow extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Link to="/cards"><button>Vocab</button></Link>
        <Link to="/users/:id/favourites"><button>Favs</button></Link>
        {/* <Quiz /> */}
      </div>

    );
  }
}





export default ProfileShow;
