import React, { Component } from 'react';
import Layout from '../components/Layout';
import Terms from '../core-components/LegalPages/TermsOfUse';

export default class FAQ extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <Terms/>
            </Layout>
        )
    }
}
