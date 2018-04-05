import React from 'react';
import './AppBody.scss';

const AppBody = (props) => {
  return (
    <div className="AppBody">
      {props.children}
    </div>
  );
}

export default AppBody;
