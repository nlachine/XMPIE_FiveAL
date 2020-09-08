import React, { Component } from 'react';
import Layout from '../components/Layout';
import LandingPage from '../core-components/LandingPage/LandingPage';

export default class AboutUs extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <LandingPage />
            </Layout>
        )
    }
}
