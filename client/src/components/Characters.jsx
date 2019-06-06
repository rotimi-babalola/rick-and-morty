import React from 'react';
import { Card } from 'antd';
import { Query } from 'react-apollo';

import getSearchQuery from '../utils/getSearchQuery';

import Loading from './Loading';
import Controls from './Controls';

import '../styles/characters.scss';

class Characters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {},
      pageNumber: 1,
    };
  }

  handleInputChange = evt => {
    const name = evt.target.value;
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        name,
      },
    }));
  };

  render() {
    return (
      <>
        <Controls onInputChange={this.handleInputChange} onChange={() => {}} />
        <Query
          query={getSearchQuery}
          variables={{
            pageNumber: this.state.pageNumber,
            filter: this.state.filter,
          }}
        >
          {({ data, loading }) => {
            if (loading) {
              return <Loading />;
            }

            if (data.characters.results === null) {
              return <h1>Data not found</h1>;
            }

            return (
              <div className="card-wrapper">
                {data.characters.results.map(el => (
                  <Card
                    title={el.name}
                    key={el.id}
                    hoverable
                    cover={<img alt="example" src={el.image} />}
                  >
                    <p>{el.species}</p>
                    <p>{el.gender}</p>
                  </Card>
                ))}
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Characters;
