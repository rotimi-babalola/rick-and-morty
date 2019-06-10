import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Characters from './Characters';
import CharacterView from './CharacterView';

import '../styles/app.scss';

import 'antd/dist/antd.css';

const App = () => (
  <div className="app-container">
    <h1 className="heading">Rick & Morty Characters</h1>
    <Router>
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route exact path="/:id" component={CharacterView} />
      </Switch>
    </Router>
  </div>
);

export default App;
