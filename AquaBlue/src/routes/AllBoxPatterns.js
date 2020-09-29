import React, { Component } from 'react';
import Layout from '../components/Layout';
import PatternsPage from '../core-components/PatternsPage/PatternsPage';

export default class AllBoxPatterns extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <PatternsPage/>
            </Layout>
        )
    }
}
