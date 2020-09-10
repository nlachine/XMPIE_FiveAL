import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Box } from '@material-ui/core';

import './Jumbotron2.scss';

const JumbotronButton = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
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
        fontFamily: 'Montserrat, Arial, sans-serif',
        color: 'black',
        paddingBottom: '0px',
        maxWidth: '70%',
        textAlign: 'center'
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '2rem',
        },
    }
}))(Typography);

const JumbotronSubtitle = withStyles((theme) => ({
    root: {
        fontSize: '1.5rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        color: 'black',
        paddingBottom: '20px',
        maxWidth: '60%',
        textAlign: 'center'
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '0.75rem',
        },
    }
}))(Typography);

export default function Jumbotron(props) {
    return (
        <div className="jumbotron-wrapper">
            <JumbotronTitle className="title">
                Greeting Card Boxes That<br/><span className="surprise">Surprise</span> & <span className="delight">Delight</span>
            </JumbotronTitle>
            <JumbotronSubtitle className="subtitle">{props.subtitle}</JumbotronSubtitle>
            <JumbotronButton variant="contained" color="primary" className="button">{props.buttonText}</JumbotronButton>
        </div>
    )
}
