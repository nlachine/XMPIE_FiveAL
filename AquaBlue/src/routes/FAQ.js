import React, { Component } from 'react';
import Layout from '../components/Layout';
import FAQPage from '../core-components/FAQ/FAQPage';

export default class FAQ extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <FAQPage />
            </Layout>
        )
    }
}
