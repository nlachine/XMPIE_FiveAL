import React, { Component } from 'react';
import Layout from '../components/Layout';
import FavouritesPage from '../core-components/FavouritesPage/FavouritesPage';

export default class Favourites extends Component {
    render() {
        return (
            <Layout {...this.props}>
                <FavouritesPage />
            </Layout>
        )
    }
}
