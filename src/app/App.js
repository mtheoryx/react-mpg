import React, { Component } from 'react';

import Header from '../components/Header'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header headerText="my mpg app" />

          <p className="App-intro">
              Simple fuel economy tracking.
            </p>
      </div>
    );
  }
}

export default App;
