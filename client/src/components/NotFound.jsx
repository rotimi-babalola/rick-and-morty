import React from 'react';
import { Empty, Button } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/not-found.scss';

const NotFound = props => (
  <>
    <Empty description={props.description} style={{ marginTop: '20%' }} />
    <div className="button-container">
      <Button onClick={props.history.goBack}>Go Back</Button>
      <span>or</span>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  </>
);

NotFound.defaultProps = {
  description: 'Page Not Found',
};

NotFound.propTypes = {
  description: PropTypes.string,
  history: PropTypes.shape().isRequired,
};

export default NotFound;
