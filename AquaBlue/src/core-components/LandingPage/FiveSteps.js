import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import './FiveSteps.scss';
import step1img from '../../assets/images/Steps_1.png';
import step2img from '../../assets/images/Steps_2.png';
import step3img from '../../assets/images/Steps_3.png';
import step4img from '../../assets/images/Steps_4.png';
import step5img from '../../assets/images/Steps_5.png';

const Description = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 'bold',
        color: 'black',
        padding: '10px 0px',
        maxWidth: '70%',
        textAlign: 'center',
        margin: 'auto',
    },
    '@media (max-width: 1200px)': {
        root: {
            fontSize: '0.75rem',
        },
    },
    '@media (max-width: 949px)': {
        root: {
            fontSize: '0.5rem',
        },
    },
}))(Typography);

const FiveStepsTitle = withStyles((theme) => ({
    root: {
        fontSize: '2.5rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        textTransform: 'uppercase',
        color: 'black',
        padding: '0px 10px 40px 0px',
        maxWidth: '70%',
        textAlign: 'center',
        margin: 'auto',
    },
    '@media (max-width: 1200px)': {
        root: {
            fontSize: '1.75rem',
        },
    },
    '@media (max-width: 949px)': {
        root: {
            fontSize: '1.5rem',
        },
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '1rem',
        },
    }
}))(Typography);


export default class FiveSteps extends Component {
    render() {
        return (
            <div className="fivesteps-wrapper">
                <FiveStepsTitle>From design to delivery in <span className="easy-steps">5 easy steps.</span></FiveStepsTitle>
                <Grid className="fivesteps-container" container direction="row" justify="center" alignItems="center" alignContent="center">
                    <Grid item xs={1} md={1}/>
                    <Grid item xs={2} md={2}>
                        <img className="steps-img" src={step1img} alt="Step1"/>
                        <Description>This is the First Step</Description>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <img className="steps-img" src={step2img} alt="Step2"/>
                        <Description>This is the Second Step</Description>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <img className="steps-img" src={step3img} alt="Step3"/>
                        <Description>This is the Third Step</Description>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <img className="steps-img" src={step4img} alt="Step4"/>
                        <Description>This is the Fourth Step</Description>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <img className="steps-img" src={step5img} alt="Step5"/>
                        <Description>This is the Fifth Step</Description>
                    </Grid>
                    <Grid item xs={1} md={1}/>
                </Grid>
            </div>
        )
    }
}
