import React, { Component } from 'react';
import './App.css';
import './helpers.css';
//import base from '../base';
import defaultBeer from '../defaultBeer';
import Beer from './components/Beer';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    const beer = defaultBeer;
    const navbar = {
      title: 'Welcome to La Choperia',
      logo: 'http://lorempixel.com/50/50'
    };
    return (
      <div className="App container-fluid">
        <NavBar details={navbar}></NavBar>
        <div className="col-xs-12 beer-list">
          {
						Object
						.keys(beer)
						.map(key => <Beer
							key={key}
							index={key}
							details={beer[key]}
						/>)
					}
        </div>
      </div>
    );
  }
}

export default App;
