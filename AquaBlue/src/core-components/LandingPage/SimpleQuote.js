import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Box, Typography} from '@material-ui/core'
import './SimpleQuote.scss';

const Quote = withStyles((theme) => ({
    root: {
        fontSize: '1.5rem',
        // fontFamily: 'Montserrat, Arial, sans-serif',
        color: 'black',
        textAlign: 'center'
    },
}))(Typography);

const Author = withStyles((theme) => ({
    root: {
        fontSize: '1.5rem',
        // fontFamily: 'Montserrat, Arial, sans-serif',
        color: 'black',
        textAlign: 'center'
    },
}))(Typography);

function SimpleQuote(props) {
    return (
        <Box className="quote-div">
            <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8} justify="center" alignItems="center">
                    <Quote className="quote-h4" variant="h4" gutterBottom="true">{props.quote}</Quote>
                    <Author className="author-h5" variant="h5">{props.author}</Author>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </Box >
    );
}

export default SimpleQuote;