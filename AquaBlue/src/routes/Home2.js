import React, { Component } from 'react';
import Layout from '../components/Layout';
import FAQPage from '../core-components/FAQPage/FAQPage';
import LandingPage2 from '../core-components/LandingPage/LandingPage2';

export default class Home2 extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <LandingPage2 />
            </Layout>
        )
    }
}

