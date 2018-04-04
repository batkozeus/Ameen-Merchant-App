import React, { Component } from 'react';
import './Footer.css';

const listFooterItems = {
  "001": {
    id: "001",
    title: "Terms"
  },
  "002": {
    id: "002",
    title: "Privacy"
  },
  "003": {
    id: "003",
    title: "Security"
  },
  "004": {
    id: "004",
    title: "Status"
  },
  "005": {
    id: "005",
    title: "Help"
  },
  "006": {
    id: "006",
    title: "Contact"
  }
};

class Footer extends Component {
  render() {   
    return <footer className="Footer">
        <div className="Footer__trademark">&copy; 2018 IgorProperty</div>
        <ul className="Footer__info-list">
          {Object.keys(listFooterItems).map(key => (
            <li
              className="Footer__button-single"
              key={listFooterItems[key].id}
            >
              <a className="Footer__button-link">
                {listFooterItems[key].title}
              </a>
            </li>
          ))}
        </ul>
      </footer>;
  }
}

export default Footer;
