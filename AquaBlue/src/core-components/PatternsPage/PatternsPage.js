import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import PatternGrid from './PatternGrid';
import Quote1 from './Quote1.js'

const TheTitle = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        color: '#333',
        paddingTop: '20px',
        textAlign: 'center',
        margin: 'auto',
        fontFamily: 'Montserrat'
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
                <TheTitle>Box Patterns</TheTitle>
                <PatternGrid />
            </div>
        )
    }
}
