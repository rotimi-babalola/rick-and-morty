import React from 'react';
import { Query } from 'react-apollo';

const withData = query => Component => () => (
  <Query query={query}>
    {({ data, loading }) => <Component data={data} loading={loading} />}
  </Query>
);

export default withData;
