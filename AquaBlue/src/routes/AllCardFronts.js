import React, { Component } from 'react';
import Layout from '../components/Layout';
import CardsPage from '../core-components/CardsPage/CardsPage';

export default class AllCardFronts extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <CardsPage/>
            </Layout>
        )
    }
}
