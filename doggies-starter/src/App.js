import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';

import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-container">
            <Main />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
