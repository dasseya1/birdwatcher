import React, { Component } from 'react';
import { Link } from 'react-router';
import HomePage from '../components/HomePage.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import Auth from '../modules/Auth.js';

export default class Base extends Component {
    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <Link to="/">React App</Link>
                    </div>
                    {Auth.isUserAuthenticated() ? (
                        <div className="top-bar-right">
                             <Link to="/logout">Log out</Link>
                        </div>
                    ) : (
                        <div className="top-bar-right">
                            <Link to="/login">Log in</Link>
                            <Link to="/signup">Sign up</Link>
                        </div>
                    )}
                    
                </div>
                {this.props.children}
            </div>
        );
    }
};
