import React, { Component } from 'react';
import Layout from '../components/Layout';
import MaterialUIBanner2 from '../core-components/MaterialUIBanner2/materialUIBanner2.js'

export default class AboutUs extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <MaterialUIBanner2
                    title="This is a title"
                    subtitle="I wrote this out to fill more information for now"
                    buttonText="Click Me"
                />
            </Layout>
        )
    }
}
