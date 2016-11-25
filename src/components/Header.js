import React from 'react';
import './Header.css'
import { titleCase } from '../util/strings';


const Header = props => {
    return (
        <div className="App-header">
          <h2>{titleCase(props.headerText)}</h2>
        </div>
    )
};

Header.propTypes = {
    headerText: React.PropTypes.string.isRequired
};

export default Header;
