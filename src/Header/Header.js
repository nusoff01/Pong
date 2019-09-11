import React from 'react';
import './Header.css';

class Header extends React.Component {
   
    render () {
        return (<div className="header">
            <div className="headerText">Table tenniS Insights (TSI)</div>
            <a target="_blank" href="https://docs.google.com/spreadsheets/d/1sF6K5eoTMGjo07zJKPZMnWw_B3yIk6WU5F6Ud56PVTs/edit?usp=sharing">
                <button>Record a match!</button>
            </a>
        </div>);
    }
}

export default Header;