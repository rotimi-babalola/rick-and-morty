import React from 'react';
import PropTypes from 'prop-types';

import getSearchQuery from '../utils/getSearchQuery';

import withData from './HOCs/withData';

import Loading from './Loading';
import Card from './Card';
import Controls from './Contrrols';

import '../styles/characters.scss';

const GET_CHARACTERS_QUERY = getSearchQuery();

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    const name = evt.target.value;
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    return (
      <>
        <Controls onChange={() => {}} onInputChange={() => {}} />
        <div className="card-wrapper">
          {this.props.data.characters.results.map(el => (
            <Card
              key={el.id}
              imgSrc={el.image}
              name={el.name}
              species={el.species}
              gender={el.gender}
            />
          ))}
        </div>
      </>
    );
  }
}

Characters.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    characters: PropTypes.shape({
      info: PropTypes.shape({
        count: PropTypes.number.isRequired,
        next: PropTypes.number.isRequired,
        pages: PropTypes.number.isRequired,
        prev: PropTypes.number,
      }).isRequired,
      results: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }),
  }).isRequired,
};

export default withData(GET_CHARACTERS_QUERY)(Characters);
