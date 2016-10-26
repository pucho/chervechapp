import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './App';
import NotFound from './components/NotFound';
import './index.css';


const Root = () => {
	return (
		<BrowserRouter>
		<div>
      <Match exactly pattern="/" component={NotFound} />
			<Match pattern="/:storeId" component={App} />
			<Miss component={NotFound} />
		</div>
		</BrowserRouter>
	 )
}

render(<Root />,  document.getElementById('root'));
