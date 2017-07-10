import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm.jsx';
import Auth from '../modules/Auth.js';

class LoginPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            }
        }

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    processForm(event) {
        event.preventDefault();

        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.user.email,
                password: this.state.user.password
            })
        })
        .then(res => res.json())
        .then(res => {
            if (!res.success) {
                this.setState({ errors: res.errors });
            } else {
                Auth.authenticateUser(res.token);
                this.setState({ errors: {} });
                this.context.router.push('/');
            }
        })
        .catch(err => console.log(err));

    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({ user });
    }

    render() {
        return (
            <LoginForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }
}

LoginPage.contextTypes = {
    router: PropTypes.object.isRequired
}

export default LoginPage;
