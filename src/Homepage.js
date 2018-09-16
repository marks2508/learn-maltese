import React from 'react';
import { Link  } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="background">
      <div>
        <h1>Welcome</h1>
        <h2>The best site to help you learn Maltese</h2>
        <h3>Please <Link to="/login">login</Link> or <Link to="/register">register</Link></h3>
      </div>
    </div>
  );
};

export default Homepage;
