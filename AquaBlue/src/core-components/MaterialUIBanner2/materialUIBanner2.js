import React from 'react';
import { Grid, Box, ButtonBase, Typography, Button } from '@material-ui/core';
import './materialUIBanner2.css';

export default function materialUIBanner(props) {
    return (
        <Box>
            <Grid container direction="row" justify="center" alignContent="center">
                <Grid item xs={2}/>
                <Grid className="banner-content" item xs={8}>
                    <Typography className="banner-title" variant="h3" gutterBottom="true">{props.title}</Typography>
                    <Typography className="banner-subtitle" variant="h5" gutterBottom="true">{props.subtitle}</Typography>
                    <Button className="banner-button">{props.buttonText}</Button>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
        </Box>
    );
}