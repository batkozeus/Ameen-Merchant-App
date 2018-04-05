import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from 'components/Header/Header';
import AppBody from 'components/AppBody/AppBody';
import MainPage from 'components/MainPage/MainPage';
import CalendarPage from 'components/CalendarPage/CalendarPage';
import ContactPage from 'components/ContactPage/ContactPage';
import PortfolioPage from 'components/PortfolioPage/PortfolioPage';
import Footer from "components/Footer/Footer";


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
				<AppBody>
					<Switch>
						<Route exact path="/" component={MainPage} />
						<Route path="/calender" component={CalendarPage} />
						<Route path="/contact" component={ContactPage} />
						<Route path="/portfolio" component={PortfolioPage} />
						<Redirect to="/" />
					</Switch>
				</AppBody>
				<Footer/>
      </div>
    );
  }
}

export default App;
