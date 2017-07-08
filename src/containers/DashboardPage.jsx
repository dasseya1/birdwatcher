import React, { Component } from 'react';
import Auth from '../modules/Auth.js' ;
import Dashboard from '../components/Dashboard.jsx';

export default class DashboardPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            secretData: ''
        };
    }

    componentDidMount() {
        fetch('/api/dashboard', {
            headers: {
                'Authorization': `bearer ${Auth.getToken()}`
            }
        })
        .then(res => res.json())
        .then(res => {
            this.setState({ secretData: res.message });
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Dashboard secretData={this.state.secretData} />
        );
    }
}