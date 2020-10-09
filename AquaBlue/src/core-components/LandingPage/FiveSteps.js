import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';

import Paper from "@material-ui/core/Paper";

import './FiveSteps.scss';
import step1img from '../../assets/images/Step_1_holiday.png';
import step2img from '../../assets/images/Step_2_holiday.png';
import step3img from '../../assets/images/Step_3_holiday.png';
import step4img from '../../assets/images/Step_4_holiday.png';
import step5img from '../../assets/images/Step_5_holiday.png';


const Description = withStyles((theme) => ({
    root: {
        fontSize: '0.8rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 'bold',
        color: 'black',
        padding: '10px 0px 10px 20px',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    '@media (max-width: 1200px)': {
        root: {
            fontSize: '0.8rem',
        },
    },
    '@media (max-width: 949px)': {
        root: {
            fontSize: '0.8rem',
            padding: '10px 0px 40px 20px'
        },
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '0.8rem',
            padding: '10px 0px 40px 20px'
        },
    },
}))(Typography);




export default class FiveSteps extends Component {
    render() {
        return (
            <div className="fivesteps-wrapper">
                



                <Grid container spacing={0} className="fivesteps-container" justify="space-evenly">
                    
                        <Grid item xs={6} sm={6} md={2}>
                            <div className="steps">
                            <img className="steps-img" src={step1img} alt="Step1"/>
                            <Description>Pick an Occasion and Box Design</Description></div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={2}>
                            <div className="steps">
                            <img className="steps-img" src={step3img} alt="Step3"/>
                            <Description>Personalize your Card</Description></div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={2}>
                            <div className="steps">
                            <img className="steps-img" src={step2img} alt="Step3"/>
                            <Description>Upload Photos</Description></div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={2}>
                            <div className="steps">
                            <img className="steps-img" src={step4img} alt="Step4"/>
                            <Description>Choose Gift(s)</Description></div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={2}>
                            <div className="steps">
                            <img className="steps-img" src={step5img} alt="Step4"/>
                            <Description>Its a Wrap</Description></div>
                        </Grid>

                </Grid>
{/* 
                <Grid className="fivesteps-container" container spacing={1} direction="row" justify="space-evenly" alignItems="center" alignContent="center">
                    <Grid container item xs={6} sm={2} md={2}><div>
                        <img className="steps-img" src={step1img} alt="Step1"/>
                        <Description>Design</Description></div>
                    </Grid>
                    <Grid container item xs={6} sm={2} md={2}><div>
                        <img className="steps-img" src={step3img} alt="Step3"/>
                        <Description>Enter Message</Description></div>
                    </Grid>                    
                    <Grid container item xs={6} sm={2} md={2}><div>
                    <img className="steps-img" src={step3img} alt="Step3"/>
                        <Description>Enter Message</Description></div>
                    </Grid>

                    <Grid container item xs={6} sm={2} md={2}><div>
                        <img className="steps-img" src={step5img} alt="Step5"/>
                        <Description>Choose Gift(s)</Description></div>
                    </Grid>
                    <Grid container item xs={6} sm={2} md={2}><div>
                        <img className="steps-img" src={step4img} alt="Step4"/>
                        <Description>Deliver!</Description></div>
                    </Grid>
                </Grid> */}
            </div>
        )
    }
}
