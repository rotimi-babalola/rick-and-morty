import React from 'react';

import useRickMortyApi from '../hooks/useRickMortyApi';
import getSearchQuery from '../utils/getSearchQuery';

import Loading from './Loading';
import Card from './Card';

import '../styles/characters.scss';

const initialData = { characters: { info: {}, results: [] } };

const CHARACTERS_QUERY = getSearchQuery();

const Characters = () => {
  const { data, isLoading, isError } = useRickMortyApi(
    CHARACTERS_QUERY,
    initialData,
  );

  if (isError) {
    return <h1>An error occurred</h1>;
  }

  if (isLoading) {
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

export default Characters;
