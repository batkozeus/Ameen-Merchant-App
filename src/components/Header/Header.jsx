import React, { Component } from 'react';
import propTypes from "prop-types";
import 'components/Header/Header.scss';
import HeaderNav from 'components/HeaderNav/HeaderNav';

class Header extends Component {
  
  render() {
    const { items, text } = this.props;
    
    return (
			<header className="Header">
				<div className="Header__user-info">
					<div className="Header__avatar">JS</div>
					<h1 className="Header__logo">
						{text}
					</h1>
				</div>
				
				<nav className="Navigation">
					{items.map((i,idx) => (
						<HeaderNav to={i.path} myKey={idx} text={i.text} />
						))}
				</nav>
			</header>
    );
  }
}

Header.propTypes = {
  items: propTypes.array.isRequired,
  text: propTypes.string.isRequired
};

export default Header;
