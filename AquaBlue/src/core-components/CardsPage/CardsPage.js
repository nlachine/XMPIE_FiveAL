import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import CardGrid from './CardsGrid';
import Quote1 from '../PatternsPage/Quote1.js'

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
                <TheTitle>Our Cards</TheTitle>
                <CardGrid />
                <Quote1 
                    quote="In the middle of every difficulty lies opportunity"
                    author="Albert Einstein"/>
            </div>
        )
    }
}
