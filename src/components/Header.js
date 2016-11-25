import React from 'react';
import './Header.css'

const Header = props => {
    return (
        <div className="App-header">
          <h2>{props.headerText}</h2>
        </div>
    )
};

Header.propTypes = {
    headerText: React.PropTypes.string.isRequired
};

export default Header;
