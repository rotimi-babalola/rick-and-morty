import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ imgSrc, name }) => (
  <div className="card">
    <img className="card-img-top" src={imgSrc} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card content.
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
};

export default Card;
