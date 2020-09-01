import React from 'react'
import { Box, Grid, Typography } from '../../node_modules/@material-ui/core'
import './simpleQuoteDiv.css'

function simpleQuoteDiv(props) {
    return (
        <Box className="quote-div">
            <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8} justify="center" alignItems="center">
                    <Typography className="quote-h4" variant="h4" gutterBottom="true">{props.quote}</Typography>
                    <Typography className="author-h5" variant="h5">{props.author}</Typography>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </Box >
    );
}

export default simpleQuoteDiv;