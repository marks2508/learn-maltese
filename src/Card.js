import React, { Component } from 'react';

// import { Link } from 'react-router-dom';

const Card = ( props ) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="question">How do you say <h2 style={{color: 'red'}}>{props.question}</h2></div>
      </div>
    </div>
  </div>
);

export default Card;
