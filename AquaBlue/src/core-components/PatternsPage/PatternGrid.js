import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core';
import './PatternGrid.scss';

import Pattern01 from '../../assets/images/BoxPattern_Baby01.png';
import Pattern02 from '../../assets/images/BoxPattern_Birthday01.png';
import Pattern03 from '../../assets/images/BoxPattern_Birthday02.png';
import Pattern04 from '../../assets/images/BoxPattern_Congratulations01.png';
import Pattern05 from '../../assets/images/BoxPattern_Congratulations02.png';
import Pattern06 from '../../assets/images/BoxPattern_Friendship01.png';
import Pattern07 from '../../assets/images/BoxPattern_Holiday01.png';
import Pattern08 from '../../assets/images/BoxPattern_Holiday02.png';
import Pattern09 from '../../assets/images/BoxPattern_Sympahty02.png';
import Pattern10 from '../../assets/images/BoxPattern_Sympathy01.png';
import Pattern11 from '../../assets/images/BoxPattern_ThankYou01.png';

const PatternLabel = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        fontFamily: 'proxima-nova, sans-serif',
        color: 'black',
        paddingTop: '10px',
        textAlign: 'center'
    },
    '@media (max-width: 1200px)': {root: {fontSize: '1rem'}},
    '@media (max-width: 949px)': {root: {fontSize: '1rem'}},
    '@media (max-width: 600px)': {root: {fontSize: '1rem'}}
}))(Typography);

export default class PatternGrid extends Component {
    render() {
        return (
        <div className="design-grid-wrapper">
            <Grid className="design-grid-container" container spacing={5} directio="row" justify="center" alignItems="center">
                <Grid item xs={6} sm={3}>
                    <img className = "box-design-thumbnail" src={Pattern01} alt="BoxDesign"/>
                    <PatternLabel>Pattern One</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "box-design-thumbnail" src={Pattern02} alt="BoxDesign"/>
                    <PatternLabel>Pattern Two</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "box-design-thumbnail" src={Pattern03} alt="BoxDesign"/>
                    <PatternLabel>Pattern Three</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "box-design-thumbnail" src={Pattern04} alt="BoxDesign"/>
                    <PatternLabel>Pattern Four</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "box-design-thumbnail" src={Pattern05} alt="BoxDesign"/>
                    <PatternLabel>Pattern Five</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "box-design-thumbnail" src={Pattern06} alt="BoxDesign"/>
                    <PatternLabel>Pattern Six</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "box-design-thumbnail" src={Pattern07} alt="BoxDesign"/>
                    <PatternLabel>Pattern Seven</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "box-design-thumbnail" src={Pattern08} alt="BoxDesign"/>
                    <PatternLabel>Pattern Eight</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "box-design-thumbnail" src={Pattern09} alt="BoxDesign"/>
                    <PatternLabel>Pattern Nine</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "box-design-thumbnail" src={Pattern10} alt="BoxDesign"/>
                    <PatternLabel>Pattern Ten</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "box-design-thumbnail" src={Pattern11} alt="BoxDesign"/>
                    <PatternLabel>Pattern Eleven</PatternLabel>
                </Grid>

            </Grid>
        </div>
        )
    }
}
