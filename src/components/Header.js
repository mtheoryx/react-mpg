import React from 'react';
import './Header.css'

const Header = props => {
    return (
        <div className="App-header">
          <h2>{props.headerText}</h2>
        </div>
    )
};

export default Header;
