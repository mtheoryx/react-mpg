import React from 'react';
import './Header.css'
import { titleCase } from '../util/strings';

const Header = props => {
    const text = props.headerText ? titleCase(props.headerText) : 'Default Header';

    return (
        <div className="App-header">
          <h2>{text}</h2>
        </div>
    )
};

Header.propTypes = {
    headerText: React.PropTypes.string.isRequired
};

export default Header;
