import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Box } from '@material-ui/core';
import urlGenerator from '$ustoreinternal/services/urlGenerator'
import './Jumbotron2.scss';
import FiveSteps from './FiveSteps';

const JumbotronButton = withStyles((theme) => ({
    root: {
        margin:'20px 0px 100px 0px',
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
        fontSize: '2.2rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        color: 'black',
        padding: '100px 0px 90px 0px',
        maxWidth: '70%',
        textAlign: 'center'
    },
    '@media (max-width: 1200px)': {
        root: {
            padding: '10px 0px 50px 0px',
            fontSize: '2rem',
        },
    },
    '@media (max-width: 949px)': {
        root: {    
            padding: '130px 50px 50px 50px',
            fontSize: '1.5rem',
        },
    },
    '@media (max-width: 600px)': {
        root: {
            padding: '100px 0px 50px 0px',
            fontSize: '1.5rem'
        },
    },
    '@media (max-width: 400px)': {
        root: {
            padding: '100px 0px 50px 0px',
            fontSize: '2rem'
        },
    }
}))(Typography);



export default function Jumbotron(props) {
    return (
        <div className="jumbotron-wrapper">
            <JumbotronTitle className="title">
                Personalized Greeting Card Boxes<br/>That <span className="surprise">Surprise</span> & <span className="delight">Delight</span> Every Time!
            </JumbotronTitle>
            <FiveSteps className="fivesteps"/>
            {/* <JumbotronSubtitle className="subtitle">{props.subtitle}</JumbotronSubtitle> */}
            <JumbotronButton variant="contained" color="primary" className="button" href={urlGenerator.get({ page: 'Occasions' })}>{props.buttonText}</JumbotronButton>
   
        </div>
    )
}
