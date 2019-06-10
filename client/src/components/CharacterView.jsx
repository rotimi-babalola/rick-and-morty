import React from 'react';
import { Button, Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterView = props => {
  const { name } = props.match.params;
  return (
    <>
      <Descriptions title={name}>
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
      <Link to="/">
        <Button type="primary">Go Home</Button>
      </Link>
    </>
  );
};

CharacterView.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default CharacterView;
