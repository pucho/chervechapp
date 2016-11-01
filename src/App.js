import React, { Component } from 'react';
import './App.css';
//import base from '../base';
import defaultBeer from '../defaultBeer';
import Beer from './components/Beer';
import NavBar from './components/NavBar';
import Sidebar from 'react-sidebar';


class App extends Component {
  constructor() {
    super();
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.showOrder = this.showOrder.bind(this);

    this.state = {
			items: {},
			order: {}
		};
  }

  getInitialState() {
    return {sidebarOpen: true};
  }

  onSetSidebarOpen() {
    this.setState({sidebarOpen: true});
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
    //copy state
    const order = {...this.state.order};
    //delete item from list or decrease number of items
    if(order[index] <= 0 || !order[index]) {
      delete order[index];
    } else {
      order[index] -= 1;
    }
		this.setState({ order });
  }

  showOrder() {
    console.log('should show panel');
  }



  render() {
    const beer = defaultBeer;
    const navbar = {
      title: 'Welcome to La Choperia',
      logo: 'http://mastra.com.uy/wp-content/uploads/2014/02/mastra-logo1.png'
    };
    var sidebarContent = <b>Sidebar content</b>;
    return (
      <div className="App container-fluid">
        <Sidebar
          docked={true}
          sidebarClassName={'sidebar'}
          sidebar={sidebarContent}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}>
          <b>Main Content</b>
        </Sidebar>
        <NavBar details={navbar} showOrder={this.showOrder}></NavBar>
        <div className="col-xs-12 beer-list">
          {
						Object
						.keys(beer)
						.map(key => <Beer
							key={key}
							index={key}
							details={beer[key]}
              addToOrder={this.addToOrder}
              removeFromOrder={this.removeFromOrder}
						/>)
					}
        </div>
      </div>
    );
  }
}

export default App;
