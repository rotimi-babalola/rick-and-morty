import React from 'react';
import { Query } from 'react-apollo';

import getSearchQuery from '../utils/getSearchQuery';

import Loading from './Loading';
import Card from './Card';
import Controls from './Contrrols';

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
        <Controls onInputChange={this.handleInputChange} />
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
                    key={el.id}
                    imgSrc={el.image}
                    name={el.name}
                    species={el.species}
                    gender={el.gender}
                  />
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
