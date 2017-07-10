import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../components/SignUpForm.jsx';

class SignUpPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            errors: {},
            user: {
                email: '',
                name: '',
                password: ''
            }
        };
        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({ user });
    }

    processForm(event) {
        event.preventDefault();
        console.log('name', this.state.user.name);
        console.log('email', this.state.user.email);
        console.log('password', this.state.user.password);

        fetch('/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.user.name,
                email: this.state.user.email,
                password: this.state.user.password
            })
        })
        .then(res => res.json())
        .then(res => {
            if (!res.success) {
                this.setState({ errors: res.errors });
            } else {
                this.setState({ errors: {} });
                this.context.router.push('/login');
            }
        })
        .catch(err => console.log(err));

    }

    render() {
        return (
            <SignUpForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }
}

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;
