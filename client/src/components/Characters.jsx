import React from 'react';
import { Card, Pagination } from 'antd';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getCharactersQuery from '../utils/queries/getCharacters';

import Loading from './Loading';

import '../styles/characters.scss';

const Characters = props => {
  const { loading, data, error } = useQuery(getCharactersQuery, {
    variables: { pageNumber: props.pageNumber, filter: props.filter },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>Unable to load data</h1>;
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
                page: props.pageNumber,
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
        current={props.pageNumber}
        pageSize={Math.ceil(
          data.characters.info.count / data.characters.info.pages,
        )}
        total={data.characters.info.count}
        onChange={props.handlePageChange}
        style={{
          textAlign: 'center',
          marginBottom: '50px',
          marginTop: '50px',
        }}
      />
    </>
  );
};

Characters.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  filter: PropTypes.shape().isRequired,
};

export default Characters;
