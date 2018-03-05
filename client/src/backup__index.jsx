import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import AppDescription from './AppDescription.jsx';

const IndexDescription = (props) => (
  <div>
    <p>
      I dont get it
    </p>
    <AppDescription roomId={props.params.rId}></AppDescription>
  </div>
);

const Index = (props) => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <AppDescription roomId={props.roomId}></AppDescription>
      </Route>
      <Route path='/rooms' exact>
        <p>
          Client rooms
        </p>
      </Route>
      <Route path='/rooms/:rId/description' component={IndexDescription}></Route>
    </Switch>
  </Router>
);

window.Index = Index;
