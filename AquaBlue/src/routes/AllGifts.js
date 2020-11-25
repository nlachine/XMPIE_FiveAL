import React, { Component } from 'react';
import Layout from '../components/Layout';
import GiftsPage from '../core-components/GiftsPage/GiftsPage';

export default class AllGifts extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <GiftsPage/>
            </Layout>
        )
    }
}
