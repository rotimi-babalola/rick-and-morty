import React from 'react';
import { Card, Pagination } from 'antd';
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

  handlePageChange = page => {
    this.setState({
      pageNumber: page,
    });
  };

  handleChange = value => {
    if (value === 'clear') {
      this.setState(prevState => ({
        filter: {
          ...prevState.filter,
          gender: null,
        },
      }));
    } else {
      this.setState(prevState => ({
        filter: {
          ...prevState.filter,
          gender: value,
        },
      }));
    }
  };

  render() {
    return (
      <>
        <Controls
          onInputChange={this.handleInputChange}
          onChange={this.handleChange}
        />
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
              <>
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
