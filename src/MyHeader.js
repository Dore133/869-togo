import React, { Component } from 'react';
import logo from './logo.svg';
import {NavLink} from 'react-router-dom';

class MyHeader extends Component {
    /*handleNavLinks = () => {
        const MENULINKS = [
            {name: 'Home', type: '$49.99'},
            {name: 'About', type: '$9.99'},
            {name: 'Restaraunts', type: '$29.99'}
          ];
    }*/

    render(){
        return(
            <div className="TheHeader">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        );
    }
        
}

export default MyHeader;