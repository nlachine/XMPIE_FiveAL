import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import SimpleAccordion from './SimpleAccordion'

export default class FAQPage extends Component {
    render() {
        return (
            <div>
                <SimpleAccordion />
            </div>
        )
    }
}
