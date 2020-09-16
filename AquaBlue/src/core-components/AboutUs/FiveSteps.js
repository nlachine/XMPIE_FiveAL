import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import './FiveSteps.scss';
import Steps1Img from '../../assets/images/BoxBannerGif.gif';

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
    '@media (max-width: 600px)': {
        root: {
            fontSize: '0.5rem',
        },
    }
}))(Typography);


export default class FiveSteps extends Component {
    render() {
        return (
            <div className="fivesteps-wrapper">
                <Grid className="fivesteps-container" container direction="row" justify="center" alignItems="center" alignContent="center">
                    <Grid item xs={0} md={1}/>
                    <Grid item xs={12} md={2}>
                        <img className="steps-img" src={Steps1Img} alt="Step1"/>
                        <Description>This is the First Step</Description>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <img className="steps-img" src={Steps1Img} alt="Step2"/>
                        <Description>This is the Second Step</Description>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <img className="steps-img" src={Steps1Img} alt="Step3"/>
                        <Description>This is the Third Step</Description>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <img className="steps-img" src={Steps1Img} alt="Step4"/>
                        <Description>This is the Fourth Step</Description>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <img className="steps-img" src={Steps1Img} alt="Step5"/>
                        <Description>This is the Fifth Step</Description>
                    </Grid>
                    <Grid item xs={0} md={1}/>
                </Grid>

            </div>
        )
    }
}
