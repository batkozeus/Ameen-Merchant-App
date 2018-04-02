import React, { Component } from 'react';
import './App.css';
import Header from 'components/Header/Header';


const navLinks = [
	{
		path: '/',
		text: 'How it works'
	},
	{
		path: '/calender',
		text: 'Calendar'
	},
	{
		path: '/contact',
		text: 'Contact us'
	},
	{
		path: '/portfolio',
		text: 'Portfolio'
	}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text='John Snow' items={navLinks} />
      </div>
    );
  }
}

export default App;
