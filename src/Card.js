import React, { Component } from 'react';

// import { Link } from 'react-router-dom';

const Card = ( props ) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="question">{props.question}</div>
      </div>
    </div>
  </div>
);

export default Card;
