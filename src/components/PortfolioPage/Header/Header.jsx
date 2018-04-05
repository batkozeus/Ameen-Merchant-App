import React from 'react';
import './Header.css';

const listHeaderItems = {
	'001': {
		id: '001',
		title: 'LOGIN'
	},
	'002': {
		id: '002',
		title: 'BROWSE'
	},
	'003': {
		id: '003',
		title: 'ABOUT'
	},		
}

// class Header extends React.Component {
// 	render () {
// 		const { text } = this.props;

// 		return (
// 			<header className="Header">
// 				<h1 className="Header__text">{text}</h1>
// 				<ul className="Header__button-list">
// 					{Object.keys(listHeaderItems).map(key => <li className="Header__button-single" key={listHeaderItems[key].id}><a className="Header__button-link">{listHeaderItems[key].title}</a></li>)}
// 				</ul>
// 			</header>
// 		);
// 	}
// }

// export default Header;

const Header = ({ text }) => {
	return (
		<header className="Header">
			<h1 className="Header__text">{text}</h1>
			<ul className="Header__button-list">
				{Object.keys(listHeaderItems).map(key => <li className="Header__button-single" key={listHeaderItems[key].id}><a className="Header__button-link">{listHeaderItems[key].title}</a></li>)}
			</ul>
		</header>
	);
}

export default Header;