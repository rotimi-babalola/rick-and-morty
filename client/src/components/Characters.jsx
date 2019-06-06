import React from 'react';
import { Query } from 'react-apollo';

import getSearchQuery from '../utils/getSearchQuery';

import Loading from './Loading';

import '../styles/characters.scss';

const GET_CHARACTERS_QUERY = getSearchQuery();

const CardList = props => {
  console.log(props, '>>>');
  return <h1>kdkd</h1>;
};

const Characters = () => (
  <Query query={GET_CHARACTERS_QUERY}>
    {({ data, loading }) => {
      if (loading || !data) {
        return <Loading />;
      }
      return <CardList data={data} />;
    }}
  </Query>
);

export default Characters;
