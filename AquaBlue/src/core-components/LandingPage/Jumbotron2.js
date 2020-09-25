import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Box } from '@material-ui/core';
import urlGenerator from '$ustoreinternal/services/urlGenerator'
import './Jumbotron2.scss';
import FiveSteps from './FiveSteps';

const JumbotronButton = withStyles((theme) => ({
    root: {
        margin:'20px 0px 30px 0px',
        fontSize: '1rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        width: '',
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
        fontSize: '3.5rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        color: 'black',
        padding: '20px 0px 20px 0px',
        maxWidth: '70%',
        textAlign: 'center'
    },
    '@media (max-width: 1200px)': {
        root: {
            
        padding: '100px 0px 20px 0px',
            fontSize: '2.5rem',
        },
    },
    '@media (max-width: 949px)': {
        root: {
            
        padding: '100px 0px 20px 0px',
            fontSize: '2.5rem',
        },
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
                Personalized Gift Boxes That <span className="surprise">Surprise</span> & <span className="delight">Delight</span> Every Time!
            </JumbotronTitle>
            <FiveSteps className="fivesteps"/>
            {/* <JumbotronSubtitle className="subtitle">{props.subtitle}</JumbotronSubtitle> */}
            <JumbotronButton variant="contained" color="primary" className="button" href={urlGenerator.get({ page: 'Occasions' })}>{props.buttonText}</JumbotronButton>
        </div>
    )
}
