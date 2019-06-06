import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

import '../styles/loading.scss';

const Loading = ({ size }) => (
  <div className="loading-wrapper">
    <Spin size={size} />
  </div>
);

Loading.defaultProps = {
  size: 'large',
};

Loading.propTypes = {
  size: PropTypes.string,
};

export default Loading;
