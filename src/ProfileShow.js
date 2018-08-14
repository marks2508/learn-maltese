import React from 'react';
import Axios from 'axios';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import WordsIndex  from './WordsIndex';

class ProfileShow extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Link to="/words"><button>Vocasb</button></Link>

        {/* <Quiz /> */}
      </div>

    );
  }
}





export default ProfileShow;
