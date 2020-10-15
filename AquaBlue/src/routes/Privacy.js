import React, { Component } from 'react';
import Layout from '../components/Layout';
import Privacy from '../core-components/LegalPages/PrivacyPolicy';

export default class FAQ extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <Privacy/>
            </Layout>
        )
    }
}
