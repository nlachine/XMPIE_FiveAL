import React, { Component } from 'react';
import Layout from '../components/Layout';
import FAQPage from '../core-components/FAQPage/FAQPage';

export default class FAQ extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <FAQPage />
            </Layout>
        )
    }
}
