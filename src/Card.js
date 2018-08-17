import React from 'react';

import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  return(

    <div className="card" key={card.id}>
      <Link to={`/cards/${card.id}`}>
        <div className="card-content">
          <h3 className="title is-4">Category: {card.category}</h3>

          <p><i className="far fa-flag"></i></p>
          { card.favourites &&
            <div>
              { card.favourites.length !== 1 &&
                <p>
                  <i className="far fa-star"></i>Number of favs: {card.favourites.length} favourites
                </p>
              }
              { card.favourites.length === 1 &&
                <p>
                  <i className="far fa-star"></i> {card.favourites.length} favourite
                </p>
              }
            </div>
          }
        </div>
      </Link>
    </div>
  );
};

export default Card;
