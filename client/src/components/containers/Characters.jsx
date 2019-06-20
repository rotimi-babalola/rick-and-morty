import React from 'react';
import queryString from 'query-string';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';

import Characters from '../Characters';

class CharactersContainer extends React.Component {
  constructor(props) {
    super(props);

    const queryValues = queryString.parse(this.props.history.location.search, {
      parseNumbers: true,
    });

    this.state = {
      filter: {},
      pageNumber: queryValues.page || 1,
    };
  }

  setName = debounce(name => {
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        name,
      },
    }));
  }, 500);

  handleInputChange = evt => {
    const name = evt.target.value;
    this.setName(name);
  };

  handlePageChange = page => {
    this.setState(
      {
        pageNumber: page,
      },
      () => this.props.history.push(`?page=${page}`),
    );
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
      <Characters
        handleInputChange={this.handleInputChange}
        handlePageChange={this.handlePageChange}
        handleChange={this.handleChange}
        pageNumber={this.state.pageNumber}
        filter={this.state.filter}
      />
    );
  }
}

CharactersContainer.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default CharactersContainer;
