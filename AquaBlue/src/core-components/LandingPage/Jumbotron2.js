import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Box } from '@material-ui/core';
import urlGenerator from '$ustoreinternal/services/urlGenerator'
import './Jumbotron2.scss';
import FiveSteps from './FiveSteps';


import fal5 from '../../assets/images/FAL_5.png';



const JumbotronTitle = withStyles((theme) => ({
    root: {
        fontSize: '3.5rem',
        //fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: '100',
        fontStyle: 'normal',
        color: '#333',
        padding: '80px 0px 90px 0px',
        maxWidth: '70%',
        textAlign: 'center'
    },
    '@media (max-width: 1400px)': {
        root: {
            padding: '80px 0px 50px 0px',
            fontSize: '3.1rem',
        },
    },
    '@media (max-width: 1240px)': {
        root: {
            padding: '100px 0px 50px 0px',
            fontSize: '2.7rem',
        },
    },
    '@media (max-width: 949px)': {
        root: {    
            padding: '150px 50px 50px 50px',
            fontSize: '2.5rem',
        },
    },
    '@media (max-width: 600px)': {
        root: {
            padding: '70px 0px 50px 0px',
            fontSize: '2.0rem'
        },
    },
    '@media (max-width: 400px)': {
        root: {
            padding: '100px 0px 50px 0px',
            fontSize: '2.0rem'
        },
    }
}))(Typography);

const FiveStepsTitle = withStyles((theme) => ({
    root: {
        fontSize: '1.5rem',
        // fontFamily: 'Montserrat, Arial, sans-serif',
        color: '#333',
        padding: '20px 0px 10px 0px', 
        maxWidth: '100%',
        textAlign: 'center',
        margin: 'auto',
    },
    '@media (max-width: 1200px)': {
        root: {
            fontSize: '2rem',
            maxWidth: '80%'
        },
    },
    '@media (max-width: 949px)': {
        root: {
            fontSize: '1.5rem',
            maxWidth: '90%',
        },
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '1rem',
            maxWidth: '100%',
        },
    }
}))(Typography);

const JumbotronButton = withStyles((theme) => ({
    root: {
        margin:'20px 0px 100px 0px',
        fontSize: '1rem',
        // fontFamily: 'Montserrat, Arial, sans-serif',
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

export default function Jumbotron(props) {
    return (
        <div className="jumbotron-wrapper">
            <JumbotronTitle className="title">
                Personalized Greeting Card Boxes<br/>That <span className="surprise">Surprise</span> & <span className="delight">Delight</span> Every Time!
            </JumbotronTitle>
            <FiveSteps className="fivesteps"/>
            {/* <JumbotronSubtitle className="subtitle">{props.subtitle}</JumbotronSubtitle> */}
            <FiveStepsTitle>
                    Your design to their doorstep in <img src={fal5} className="fal5"/> simple steps
            </FiveStepsTitle>
            
            <JumbotronButton variant="contained" color="primary" className="button" href={urlGenerator.get({ page: 'Occasions' })}>{props.buttonText}</JumbotronButton>
   
        </div>
    )
}
