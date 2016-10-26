import React, { Component } from 'react';
import './App.css';
//import base from '../base';
import defaultBeer from '../defaultBeer';
import Beer from './components/Beer';
import NavBar from './components/NavBar';


class App extends Component {
  constructor() {
    super();
    this.addToOrder = this.addToOrder.bind(this);


    this.state = {
			items: {},
			order: {}
		};
  }

  addToOrder(index) {
    //copy state
		const order = {...this.state.order};
		//update or add the new number of fish ordered
		order[index] = order[index] + 1 || 1;
		//update state
		this.setState( { order });
  }

  removeFromOrder(index){
    console.log('button working...maybe');
    console.log(index);
  }

  render() {
    const beer = defaultBeer;
    const navbar = {
      title: 'Welcome to La Choperia',
      logo: 'http://mastra.com.uy/wp-content/uploads/2014/02/mastra-logo1.png'
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
              addToOrder={this.addToOrder}
						/>)
					}
        </div>
      </div>
    );
  }
}

export default App;
