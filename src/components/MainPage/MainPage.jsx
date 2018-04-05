import React from 'react';
import './MainPage.scss';
import MyExpansionPanel from "components/MyExpansionPanel/MyExpansionPanel";

const MainPage = () => {
  return <div className="MainPage">
      <h1 className="MainPage__title">Ameen Merchant App</h1>
      <MyExpansionPanel panelTheme="setup">
        <p className="PanelElement">
          <b>Step 1:</b> git clone this repo <code className="PanelElement--code">
            https://github.com/batkozeus/Ameen-Merchant-App.git
          </code>
        </p>
        <p className="PanelElement">
          <b>Step 2:</b> cd to the cloned repo
        </p>
        <p className="PanelElement">
          <b>Step 3:</b> Install the Application with <code className="PanelElement--code">
            yarn
          </code> or <code className="PanelElement--code">npm i</code>
        </p>
      </MyExpansionPanel>
      <MyExpansionPanel panelTheme="run">
        <p className="PanelElement">
          To open this App just follow this link: <code className="PanelElement--code">
            https://batkozeus.github.io/Ameen-Merchant-App/build/
          </code>
        </p>
      </MyExpansionPanel>
      <MyExpansionPanel panelTheme="compliant">
        <p className="PanelElement">
          <ul>
            <li>React, React Router</li>
            <li>ES6, SASS (SCSS), Flexbox</li>
            <li>Webpack</li>
            <li>Material Design</li>
            <li>Moment Js</li>
          </ul>
        </p>
      </MyExpansionPanel>
      <MyExpansionPanel panelTheme="secrets">
        <p className="PanelElement">
          <a>This project</a> uses react-native-config to expose config variables to your javascript code in React Native. You can store Api keys and other sensitive information in a <code className="PanelElement--code">
            .env{" "}
          </code> file
        </p>
        <div className="PanelCode">
          <code className="PanelElement--code">
            API_URL=https://myapi.com
          </code> <br />
          <code className="PanelElement--code">
            GOOGLE_MAPS_API_KEY=abcdefgh
          </code>
        </div>
      </MyExpansionPanel>
    </div>;
}

export default MainPage;