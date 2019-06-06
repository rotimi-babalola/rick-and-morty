import React from 'react';
import PropTypes from 'prop-types';

import '../styles/controls.scss';

const Controls = ({ onInputChange }) => (
  <div className="controls-container">
    <input
      type="text"
      className="form-control"
      placeholder="Search by name"
      onChange={onInputChange}
    />
  </div>
);

Controls.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Controls;
