import React from 'react';
import './AppBody.css';

const AppBody = (props) => {
  return (
    <div className="AppBody">
      {props.children}
    </div>
  );
}

export default AppBody;
