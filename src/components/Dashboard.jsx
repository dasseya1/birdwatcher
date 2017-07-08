import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dashboard extends Component {
    render() {
        const { secretData } = this.props;
        return (
            <div>
                {secretData && <p>{secretData}</p>}
            </div>
        );
    }
}

Dashboard.propTypes = {
    secretData: PropTypes.string.isRequired
};
