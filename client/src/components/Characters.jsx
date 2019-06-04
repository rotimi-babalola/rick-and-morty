import React from 'react';
import useRickMortyApi from '../hooks/useRickMortyApi';
import { CHARACTERS_QUERY } from '../constants';

const Characters = () => {
  const { data } = useRickMortyApi(CHARACTERS_QUERY);
  console.log(data, 'data >>>');
  return <h1>kkk</h1>;
};

export default Characters;
