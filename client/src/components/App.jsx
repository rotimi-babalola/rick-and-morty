import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import CharactersContainer from './containers/Characters';
import CharacterView from './CharacterView';
import NotFound from './NotFound';

import '../styles/app.scss';

import 'antd/dist/antd.css';

const App = () => (
  <div className="app-container">
    <Router>
      <Switch>
        <Route exact path="/" component={CharactersContainer} />
        <Route exact path="/character/:id" component={CharacterView} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default App;
