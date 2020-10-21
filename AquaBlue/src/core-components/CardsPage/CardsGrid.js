import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core';
import './CardsGrid.scss';

import Card01 from '../../assets/images/Card_BirthdayBalloons.png';
import Card02 from '../../assets/images/Card_BirthdayCake.png';
import Card03 from '../../assets/images/Card_CheersToThat.png';
import Card04 from '../../assets/images/Card_Christmas.png';
import Card05 from '../../assets/images/Card_HappyHolidays.png';
import Card06 from '../../assets/images/Card_HelloBaby.png';
import Card07 from '../../assets/images/Card_MakeAWish.png';
import Card08 from '../../assets/images/Card_PeaceAndComfort.png';
import Card09 from '../../assets/images/Card_Sympathy.png';
import Card10 from '../../assets/images/Card_ThePerfectFriend.png';
import Card11 from '../../assets/images/Card_YoureAClassic.png';

const PatternLabel = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        // fontFamily: 'Montserrat, Arial, sans-serif',
        color: 'black',
        paddingTop: '10px',
        textAlign: 'center'
    },
    '@media (max-width: 1200px)': {root: {fontSize: '1rem'}},
    '@media (max-width: 949px)': {root: {fontSize: '1rem'}},
    '@media (max-width: 600px)': {root: {fontSize: '1rem'}}
}))(Typography);

export default class CardsGrid extends Component {
    render() {
        return (
        <div className="card-grid-wrapper">
            <Grid className="card-grid-container" container spacing={5} directio="row" justify="center" alignItems="center">
                <Grid item xs={6} sm={3}>
                    <img className = "card-thumbnail" src={Card01} alt="BoxDesign"/>
                    <PatternLabel>Card One</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "card-thumbnail" src={Card02} alt="BoxDesign"/>
                    <PatternLabel>Card Two</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "card-thumbnail" src={Card03} alt="BoxDesign"/>
                    <PatternLabel>Card Three</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "card-thumbnail" src={Card04} alt="BoxDesign"/>
                    <PatternLabel>Card Four</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "card-thumbnail" src={Card05} alt="BoxDesign"/>
                    <PatternLabel>Card Five</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "card-thumbnail" src={Card06} alt="BoxDesign"/>
                    <PatternLabel>Card Six</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "card-thumbnail" src={Card07} alt="BoxDesign"/>
                    <PatternLabel>Card Seven</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "card-thumbnail" src={Card08} alt="BoxDesign"/>
                    <PatternLabel>Card Eight</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "card-thumbnail" src={Card09} alt="BoxDesign"/>
                    <PatternLabel>Card Nine</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "card-thumbnail" src={Card10} alt="BoxDesign"/>
                    <PatternLabel>Card Ten</PatternLabel>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className = "card-thumbnail" src={Card11} alt="BoxDesign"/>
                    <PatternLabel>Card Eleven</PatternLabel>
                </Grid>
            </Grid>
        </div>
        )
    }
}
