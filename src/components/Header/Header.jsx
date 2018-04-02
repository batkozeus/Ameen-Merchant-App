import React, { Component } from 'react';
import 'components/Header/Header.css';
import HeaderNav from 'components/HeaderNav/HeaderNav';

class Header extends Component {
  
  render() {
    const { items, text } = this.props;
    
    return (
			<header className="Header">
				<div className="Header__user-info">
					<div className="Header__avatar"><p>JS</p></div>
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

export default Header;