import React from 'react'
import { TextField, Grid, Button, Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


import './GetinTouch.scss';


const EmailButton = withStyles((theme) => ({
    root: {
        margin:'20px 0px 100px 0px',
        fontSize: '1rem',
        textTransform: "lowercase",
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
//const url = "https://5amlemon.us2.list-manage.com/subscribe/post?u=ac366de6605f1529b50e05c73&id=2d8d0c340e";

const Title = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        // fontFamily: 'Montserrat, Arial, sans-serif',
        typeTransform: 'uppercase',
        color: 'black',
        textAlign: 'center',
        paddingBottom: '0px'
    },

    '@media (max-width: 959px)': {
        root: {
            fontSize: '2.25rem',
        },
    },

    '@media (max-width: 600px)': {
        root: {
            fontSize: '1.5rem',
        },
    }
}))(Typography);

export default function SubEmail() {
    return (
        <div className="email-subscription-wrapper">
            
            <div className="email-subscription-container">
            <Title>Get in <span className="earlyrisers">Touch</span></Title>
            <EmailButton variant="contained" color="primary" className="button" href="mailto:hello@5amlemon.com">hello@5amlemon.com</EmailButton>
            </div>
        </div>
    )
}
