import React from 'react';
import { Card, Pagination } from 'antd';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import getCharactersQuery from '../utils/queries/getCharacters';

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

  handlePageChange = page => {
    this.setState({
      pageNumber: page,
    });
  };

  handleChange = value => {
    // start fetching from page 1 if
    // we change gender
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        gender: value,
      },
      pageNumber: 1,
    }));
  };

  render() {
    return (
      <>
        <h1 className="heading">Rick & Morty Characters</h1>
        <Controls
          onInputChange={this.handleInputChange}
          onChange={this.handleChange}
        />
        <Query
          query={getCharactersQuery}
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
              <>
                <div className="card-wrapper">
                  {data.characters.results.map(el => (
                    <Link
                      key={el.id}
                      to={{
                        pathname: `/character/${el.id}`,
                        state: {
                          name: el.name,
                          image: el.image,
                          gender: el.gender,
                        },
                      }}
                    >
                      <Card
                        title={el.name}
                        hoverable
                        cover={<img alt="example" src={el.image} />}
                      >
                        <p>{el.species}</p>
                        <p>{el.gender}</p>
                      </Card>
                    </Link>
                  ))}
                </div>
                <Pagination
                  current={this.state.pageNumber}
                  pageSize={Math.ceil(
                    data.characters.info.count / data.characters.info.pages,
                  )}
                  total={data.characters.info.count}
                  onChange={this.handlePageChange}
                  style={{
                    textAlign: 'center',
                    marginBottom: '50px',
                    marginTop: '50px',
                  }}
                />
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Characters;
