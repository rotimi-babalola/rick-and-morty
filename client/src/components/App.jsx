import React from 'react';
import Characters from './Characters';

import '../styles/app.scss';

import 'antd/dist/antd.css';

const App = () => (
  <div className="app-container">
    <h1 className="heading">Rick & Morty Characters</h1>
    <Characters />
  </div>
);

export default App;
