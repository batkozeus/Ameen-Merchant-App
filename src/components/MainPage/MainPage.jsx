import React, { Component } from 'react';
import './MainPage.css';

class MainPage extends Component {
  
  render() {
    const { items, text } = this.props;
    
    return (
				<div className="Header__user-info">
					MainPage
				</div>
    );
  }
}

export default MainPage;
