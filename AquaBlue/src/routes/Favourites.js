import React, { Component } from 'react';
import Layout from '../components/Layout';

export default class Favourites extends Component {
    render() {
        return (
            <Layout {...this.props}>
                Favourites
            </Layout>
        )
    }
}
