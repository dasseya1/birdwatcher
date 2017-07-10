import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LoginForm extends Component {
    render() {
        const {
            onSubmit,
            onChange,
            errors,
            user
        } = this.props;
        return (
            <form action="/" onSubmit={onSubmit}>
                <h2>Login</h2>
                <div>
                    <input type="email" name="email" onChange={onChange} value={user.email} />
                    <p>{errors.email}</p>
                </div>
                <div>
                    <input type="password" name="password" onChange={onChange} value={user.password} />
                    <p>{errors.password}</p>
                </div>
                <div>
                    <button type="submit">Log in</button>
                </div>
                <div>
                    Don't have an account? <Link to={'/signup'}>Create one</Link>.
                </div>
            </form>
        );
    }
};
