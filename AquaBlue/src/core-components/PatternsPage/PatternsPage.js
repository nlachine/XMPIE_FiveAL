import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import PatternGrid from './PatternGrid';
import Quote1 from './Quote1.js'

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
                <TheTitle>Our Patterns</TheTitle>
                <PatternGrid />
                <Quote1 
                    quote="Whatever you are, be a good one"
                    author="Abraham Lincoln"/>
            </div>
        )
    }
}
