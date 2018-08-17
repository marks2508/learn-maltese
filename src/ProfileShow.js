import React from 'react';
import Axios from 'axios';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import WordsIndex  from './WordsIndex';
import CardClass from './CardClass';

class ProfileShow extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Link to="/cards"><button>Vocasb</button></Link>
        <CardClass />
        {/* <Quiz /> */}
      </div>

    );
  }
}





export default ProfileShow;
