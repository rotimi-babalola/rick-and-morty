import React from 'react';
import { Button, Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import getCharacterQuery from '../utils/queries/getCharacter';
import Loading from './Loading';

const CharacterView = props => {
  const { id } = props.match.params;
  const { state } = props.location;
  return (
    <>
      <Query query={getCharacterQuery} variables={{ id }}>
        {({ data, loading }) => {
          if (loading) {
            return <Loading />;
          }

          return (
            <div
              className="descriptions-container"
              style={{
                marginBottom: '10px',
                padding: '15px',
              }}
            >
              <h1>{state.name}</h1>
              <img
                src={state.image}
                alt="Character"
                style={{ marginBottom: '30px' }}
              />
              <Descriptions>
                <Descriptions.Item label="Gender">
                  {state.gender}
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                  {data.character.status}
                </Descriptions.Item>
                <Descriptions.Item label="Location">
                  {data.character.location.name}
                </Descriptions.Item>
                <Descriptions.Item label="Origin">
                  {data.character.origin.name}
                </Descriptions.Item>
              </Descriptions>
            </div>
          );
        }}
      </Query>
      <Link to="/">
        <Button type="primary" icon="left">
          Go Back
        </Button>
      </Link>
    </>
  );
};

CharacterView.propTypes = {
  match: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
};

export default CharacterView;
