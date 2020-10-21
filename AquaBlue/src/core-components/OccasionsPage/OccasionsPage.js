import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import TopOccasions from '../LandingPage/TopOccasions';
import TopCategories from '../LandingPage/TopCategories';

const TheTitle = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        color: '#333',
        paddingTop: '20px',
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
                <div style={{ padding: "0px 0px" }} />
                <TopOccasions />            
            </div>
        )
    }
}
