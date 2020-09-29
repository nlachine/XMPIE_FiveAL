import { Typography } from '@material-ui/core'
import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import './Quote1.scss';

const Quote = withStyles((theme) => ({
    root: {
        fontSize: '2rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        color: 'black',
        textAlign: 'center',
        padding: '0px 20%',
    },
    '@media (max-width: 1200px)': {
        root: {
            fontSize: '2rem',
            padding: '0px 10%'
        },
    },
    '@media (max-width: 949px)': {
        root: {
            fontSize: '1.75rem',
        },
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '1.5rem',
        },
    }
}))(Typography);

const Author = withStyles((theme) => ({
    root: {
        fontSize: '2.5rem',
        fontFamily: 'Dancing Script, cursive',
        color: '#ec5f58',
        paddingTop: '10px',
        textAlign: 'center',
        padding: '0px 10%'
    },
    '@media (max-width: 1200px)': {
        root: {
            fontSize: '2.5rem',
        },
    },
    '@media (max-width: 949px)': {
        root: {
            fontSize: '2rem',
        },
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '1.75rem',
        },
    }
}))(Typography);

export default function Quote1(props) {
    return (
        <div className="centered-quote-wrapper">
            <Quote><q>{props.quote}</q></Quote>
            <Author>- {props.author}</Author>   
        </div>
    )
}