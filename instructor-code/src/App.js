import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path='/' component={Login} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
