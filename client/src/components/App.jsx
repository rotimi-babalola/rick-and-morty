import React from 'react';
import Characters from './Characters';

import '../styles/app.scss';

const App = () => (
  <div className="app-container">
    <h1 className="heading">Rick & Morty</h1>
    <Characters />
  </div>
);

export default App;
