import React from 'react'
import { TextField, Grid, Button, Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './SubEmail.scss';

const SubscribeButton = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        width: '300px',
        height: '55px',
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

const SubscribeInput = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        width: '300px',
        height: '55px',
        '& label.Mui-focused': {
            color: '#ec5f58',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#ec5f58',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#ec5f58',
            },
        },
    },

    '@media (max-width: 600px)': {
        root: {
            fontSize: '0.8rem',
            maxWidth: '300px',
        },
    }
}))(TextField);

const Title = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 'bold',
        typeTransform: 'uppercase',
        color: 'black',
        paddingTop: '30px',
        textAlign: 'center'
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
            <Title>Join the early risers!</Title>
            <div className="email-subscription-container">
                <form noValidate autoComplete="off">
                    <SubscribeInput id="outlined-basic" label="Email" variant="outlined" color="black" />
                </form>
                <SubscribeButton variant="contained" color="primary" className="button">Subscribe</SubscribeButton>
            </div>
        </div>
    )
}
