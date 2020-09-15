import React, { Component } from 'react';
import Layout from '../components/Layout';

import AboutUsPage from '../core-components/AboutUs/AboutUsPage';

export default class AboutUs extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <AboutUsPage />
            </Layout>
        )
    }
}
