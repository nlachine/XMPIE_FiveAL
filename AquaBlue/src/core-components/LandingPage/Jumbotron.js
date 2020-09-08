import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Box } from '@material-ui/core';

import './Jumbotron.scss';

import Img from '../../assets/images/BoxBannerGif.gif';

const JumbotronButton = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        color: '#ec5f58',
        backgroundColor: "transparent",
        '&:hover': {
            backgroundColor: "#ec5f58",
            color: theme.palette.getContrastText("#ec5f58"),
        },
        border: '#ec5f58 solid 2px',
    },
}))(Button);

const JumbotronTitle = withStyles((theme) => ({
    root: {
        fontSize: '4rem',
        color: 'black',
        paddingBottom: '0px',
    },
}))(Typography);

const JumbotronSubtitle = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        color: 'black',
        paddingBottom: '20px',
    },
}))(Typography);

export default function Jumbotron(props) {
    return (
        <div className="jumbotron-wrapper">
            <Grid className="jumbotron-container" container direction="row">
                {/* Image Holder */}
                <Grid className="display-image" item xs={6}>
                    <img src={Img} alt="DisplayImage" />
                </Grid>
                {/* Gutter Middle */}
                <Grid item xs={1} />
                {/* Information Grid */}
                <Grid item container xs={5}>
                    <Box display="flex" alignItems="center">
                        <Box className="info-container">
                            <JumbotronTitle className="title">{props.title}</JumbotronTitle>
                            <JumbotronSubtitle className="subtitle">{props.subtitle}</JumbotronSubtitle>
                            <JumbotronButton variant="contained" color="primary" className="button">{props.buttonText}</JumbotronButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
