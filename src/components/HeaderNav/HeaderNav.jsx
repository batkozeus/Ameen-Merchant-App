import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './HeaderNav.scss';


const HeaderNav = ({ to, myKey, text }) => {
	if ( to === '/') {
		return (
			<NavLink exact={true} to={to} className="Navigation__link" activeClassName="Navigation__link--active" key={myKey}>{text}</NavLink>
		);
	}
	else {
		return (
			<NavLink to={to} className="Navigation__link" activeClassName="Navigation__link--active" key={myKey}>{text}</NavLink>
		);
	}
}

HeaderNav.propTypes = {
	to: propTypes.string.isRequired,
	text: propTypes.string.isRequired,
	myKey: propTypes.number.isRequired
}

export default HeaderNav;