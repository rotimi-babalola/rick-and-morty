import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { API_URL } from './constants';

import App from './components/App';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: API_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app'),
);
