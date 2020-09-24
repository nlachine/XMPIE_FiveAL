import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import './AboutUsPage.scss';
import FounderMsg from './FounderMsg';
import fsimg from '../../assets/images/fivesteps.png';

const TheTitle = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        textTransform: 'uppercase',
        color: 'black',
        padding: '75px 0px',
        maxWidth: '70%',
        textAlign: 'center',
        margin: 'auto',
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '2rem',
        },
    }
}))(Typography);

const FiveStepsTitle = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        textTransform: 'uppercase',
        color: 'black',
        padding: '75px 0px 0px 0px',
        maxWidth: '70%',
        textAlign: 'center',
        margin: 'auto',
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '2rem',
        },
    }
}))(Typography);

export default class AboutUsPage extends Component {
    render() {
        return (
            <div className="aboutus-wrapper">
                <TheTitle>This is <span className="our-story">our story.</span></TheTitle>
                <FounderMsg
                    title="Hi, I'm Audrey!"
                    subtitle=""
                    Img=""
                />
                <TheTitle>Canadian business <span className="based-in-the-gta">based in the GTA.</span></TheTitle>
            </div>
        )
    }
}
