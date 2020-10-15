import React, { Component } from 'react';
import Layout from '../components/Layout';
import Corporate from '../core-components/CorporatePage/CorporatePage';

export default class FAQ extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <Corporate/>
            </Layout>
        )
    }
}
