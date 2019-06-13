import React, { useState } from 'react';
import { Input, Select } from 'antd';
import PropTypes from 'prop-types';

import '../styles/controls.scss';

const { Option } = Select;

const Controls = ({ onInputChange, onChange }) => {
  const [selectValue, setSelectValue] = useState([]);
  return (
    <div className="controls-container">
      <div className="select-container">
        <Select
          value={selectValue}
          showSearch
          style={{ width: 200, paddingRight: '20px' }}
          placeholder="Filter by Gender"
          optionFilterProp="children"
          onChange={value => {
            onChange(value);
            if (value === 'all') {
              setSelectValue([]);
            } else {
              setSelectValue(value);
            }
          }}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Genderless">Genderless</Option>
          <Option value="unknown">Unknown</Option>
          <Option value="all">All</Option>
        </Select>
      </div>
      <Input
        allowClear
        placeholder="Search by name"
        onChange={onInputChange}
        style={{ width: 'fit-content' }}
      />
    </div>
  );
};

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Controls;
