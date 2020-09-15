import React, { Component } from 'react';
import Layout from '../components/Layout';
import OccasionsPage from '../core-components/OccasionsPage/OccasionsPage';

export default class Occasions extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <OccasionsPage />
            </Layout>
        )
    }
}