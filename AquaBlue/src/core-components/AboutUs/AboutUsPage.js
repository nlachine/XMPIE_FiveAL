import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography, Box } from '@material-ui/core';
import './AboutUsPage.scss';
import MsgFounder from './MsgFounder';
import Infographic from './../CorporatePage/Infographic';
import AltDescriptionPhotoRight from './../CorporatePage/AltDescriptionPhotoRight';
import AltDescriptionPhotoLeft from './../CorporatePage/AltDescriptionPhotoLeft';
import SimpleQuote from './../../core-components/LandingPage/SimpleQuote';

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
                <MsgFounder />
                <Infographic
                    iconOne="https://www.flaticon.com/svg/static/icons/svg/2301/2301129.svg"
                    textOne="Minimum order quantity of 25 units."
                    iconTwo="https://www.flaticon.com/svg/static/icons/svg/2301/2301129.svg"
                    textTwo="Completely customize the box and contents."
                    iconThree="https://www.flaticon.com/svg/static/icons/svg/2301/2301129.svg"
                    textThree="Each box can be personalized for each recipient."
                />
                <div className="alt-photos-div">
                    <AltDescriptionPhotoRight
                        title="Show you care"
                        description="Let us help you surprise and delight employees, clients and prospects."
                        image="https://dummyimage.com/1920x1080/000/fff"
                    />
                    <AltDescriptionPhotoLeft
                        title="Welcome Packages"
                        description="Perhaps you are hosting a virtual conference and would like to send out a customized welcome package to each attendee."
                        image="https://dummyimage.com/1920x1080/000/fff"
                    />
                </div>

                <div className="squote">
                <TheTitle>Canadian business <span className="based-in-the-gta">based in the GTA.</span></TheTitle>
                </div>
                {/* <SimpleQuote
                    quote={<q>This is a quote to fill this space</q>}
                    author="-Noah Lachine"
                /> */}

            </div>
        )
    }
}
