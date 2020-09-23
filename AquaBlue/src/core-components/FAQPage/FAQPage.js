import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import SimpleAccordion from './SimpleAccordion'

const FAQTitle = withStyles(() => ({
    root: {
        fontSize: '4rem',
        fontFamily: '"Dancing Script", cursive',
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

export default class FAQPage extends Component {
    render() {
        return (
            <div>
                <FAQTitle>Frequently Asked Questions</FAQTitle>
                <SimpleAccordion />
            </div>
        )
    }
}
