import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SignUpForm extends Component {
    render() {
        const {
            onSubmit,
            onChange,
            errors,
            user,
        } = this.props;
        return (
            <form action="/" onSubmit={onSubmit}>
                <h2>Sign Up</h2>
                <div>
                    <input type="text" name="name" onChange={onChange} value={user.name} />
                    <p>{errors.name}</p>
                </div>
                <div>
                    <input type="text" name="email" onChange={onChange} value={user.email} />
                    <p>{errors.email}</p>
                </div>
                <div>
                    <input type="password" name="password" onChange={onChange} value={user.password} />
                    <p>{errors.password}</p>
                </div>
                <div>
                    <button type="submit">Create New Account</button>
                </div>
                <div>Already have an account? <Link to={'/login'}>Log in</Link></div>
            </form>
        );
    }
};
