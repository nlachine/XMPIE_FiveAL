import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import TopCategories from '../LandingPage/TopCategories';

const TheTitle = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        color: 'black',
        paddingBottom: '0px',
        textAlign: 'center',
        margin: 'auto',
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '2rem',
        },
    }
}))(Typography);

export default class OccasionsPage extends Component {
    render() {
        return (
            <div>
                <TheTitle>Occasions</TheTitle>
                <TopCategories />            
            </div>
        )
    }
}
