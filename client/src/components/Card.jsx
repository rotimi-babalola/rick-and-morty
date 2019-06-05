import React from 'react';
import PropTypes from 'prop-types';

import '../styles/card.scss';

const Card = ({ imgSrc, name, species, gender }) => (
  <div className="card">
    <img className="card-img-top" src={imgSrc} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">
        Species:&nbsp;
        <span className="card-text__span">{species}</span>
      </p>
      <p className="card-text">
        Gender:&nbsp;
        <span className="card-text__span">{gender}</span>
      </p>
      <button type="button" className="btn btn-primary">
        Go somewhere
      </button>
    </div>
  </div>
);

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default Card;
