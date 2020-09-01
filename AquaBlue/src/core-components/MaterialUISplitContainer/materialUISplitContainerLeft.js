import React, { Component } from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import ImgOne from '../../images/1_Gift.png';
import './materialUISplitContainer.css';


function materialUISplitContainerLeft(props) {
    return (
        <Box className="split-box">
            <Grid className="split-container" container spacing={0} direction="row" justify="center" alignItems="center">
                <Grid item xs={6}>
                    <Box className="split-box-image"/>
                </Grid>
                <Grid item xs={6}>
                    <Box className="split-box-text">
                        <Typography variant="h4" gutterBottom="true">{props.title}</Typography>
                        <Typography variant="h6" gutterBottom="true">{props.subtitle}</Typography>
                        <Button
                            variant="outlined"
                            fullWidth="false"
                            size="large"
                            disableElevation
                        >{props.buttonTxt}</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
}

export default materialUISplitContainerLeft;