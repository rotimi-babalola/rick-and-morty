import React from 'react';
import PropTypes from 'prop-types';

import getSearchQuery from '../utils/getSearchQuery';

import withData from './HOCs/withData';

import Loading from './Loading';
import Card from './Card';

import '../styles/characters.scss';

const GET_CHARACTERS_QUERY = getSearchQuery();

const Characters = ({ loading, data }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="card-wrapper">
      {data.characters.results.map(el => (
        <Card
          key={el.id}
          imgSrc={el.image}
          name={el.name}
          species={el.species}
          gender={el.gender}
        />
      ))}
    </div>
  );
};

Characters.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    characters: PropTypes.shape({
      info: PropTypes.shape({
        count: PropTypes.number.isRequired,
        next: PropTypes.number.isRequired,
        pages: PropTypes.number.isRequired,
        prev: PropTypes.number,
      }).isRequired,
      results: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }),
  }).isRequired,
};

export default withData(GET_CHARACTERS_QUERY)(Characters);
