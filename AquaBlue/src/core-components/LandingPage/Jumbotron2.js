import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Box } from '@material-ui/core';

import './Jumbotron2.scss';

const JumbotronButton = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        width: '300px',
        color: '#fff',
        backgroundColor: "#ec5f58",
        '&:hover': {
            backgroundColor: "#bc4c46",
            color: theme.palette.getContrastText("#bc4c46"),
        },
        border: 'none',
        outline: 'none'
    },
}))(Button);

const JumbotronTitle = withStyles((theme) => ({
    root: {
        fontSize: '4rem',
        color: 'black',
        paddingBottom: '0px',
        textAlign: 'center'
    },
}))(Typography);

const JumbotronSubtitle = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        color: 'black',
        paddingBottom: '20px',
        textAlign: 'center'
    },
}))(Typography);

export default function Jumbotron(props) {
    return (
        <div className="jumbotron-wrapper">
            <JumbotronTitle className="title">{props.title}</JumbotronTitle>
            <JumbotronSubtitle className="subtitle">{props.subtitle}</JumbotronSubtitle>
            <JumbotronButton variant="contained" color="primary" className="button">{props.buttonText}</JumbotronButton>
        </div>
    )
}
