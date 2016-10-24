import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

class App extends Component {
  render() {
    var details = {
      name: 'Bar Bar',
      logoUrl: 'http://lorempixel.com/100/100'
    }
    return (
      <div className="App container">
        <Header details={details}></Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
