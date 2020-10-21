import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import TopCategories from '../LandingPage/TopCategories';

const TheTitle = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        // fontFamily: 'Montserrat, Arial, sans-serif',
        color: 'black',
        paddingBottom: '0px',
        maxWidth: '70%',
        textAlign: 'center',
        margin: 'auto',
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '2rem',
        },
    }
}))(Typography);

export default class FavouritesPage extends Component {
    render() {
        return (
            <div>
                <TheTitle>Favourites</TheTitle>
                <TopCategories />       
            </div>
        )
    }
}
