import React from 'react';

const Card = ( props ) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="question">How do you say<h2 className="question">{props.question}</h2></div>
      </div>
    </div>
  </div>
);

export default Card;
