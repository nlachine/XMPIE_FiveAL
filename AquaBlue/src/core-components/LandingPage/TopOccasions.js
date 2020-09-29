import React from 'react'
import { Box, Grid, Typography, Button, ButtonBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import urlGenerator from '$ustoreinternal/services/urlGenerator';
import HoverImage from 'react-hover-image/build';
import './TopOccasions.scss';

import img1 from '../../assets/images/O_Friendship.jpg';
import img2 from '../../assets/images/O_Birthday.jpg';
import img3 from '../../assets/images/O_Sympathy.jpg';
import img4 from '../../assets/images/O_Congratulations.jpg';
import img5 from '../../assets/images/O_Holiday.jpg';
import img6 from '../../assets/images/O_Thankyou.jpg';

const Header = withStyles((theme) => ({
    root: {
        fontSize: '2rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        color: 'black',
        textAlign: 'center',
        padding: '0px 20%',
    },
    '@media (max-width: 1200px)': {
        root: {
            fontSize: '2rem',
            padding: '0px 10%'
        },
    },
    '@media (max-width: 949px)': {
        root: {
            fontSize: '1.75rem',
        },
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '1.5rem',
        },
    }
}))(Typography);

const SeeAllButton = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        width: '40%',
        color: '#fff',
        backgroundColor: "#ec5f58",
        '&:hover': {
            backgroundColor: "#bc4c46",
            color: theme.palette.getContrastText("#bc4c46"),
        },
        border: 'none',
        outline: 'none',
        margin:'0% 30% 0% 30%'
    },
    '@media (max-width: 1200px)': {
        root: {
            width: '40%',
            fontSize: '0.85rem',
            
        },
    },
    '@media (max-width: 949px)': {
        root: {
            width: '50%',
            fontSize: '0.7rem',
            margin:'0% 0% 0% 0%'
        },
    },
    '@media (max-width: 600px)': {
        root: {
            width: '70%',
            fontSize: '0.7rem',
            margin:'0% 15% 0% 15%'
        },
    }
}))(Button);

export default function TopEvent() {
    return (
        <div className="top-event-wrapper">
            <Box className="top-event-container">
                <Header>Pick an Occasion</Header>
                <Grid className="events" container direction="row" justify="space-evenly" alignItems="center" spacing={1}>
                    <Grid className="occasion-icon-holder" item xs={4} md={2}>
                        <ButtonBase href="category/30">
                            <img className="occasion-icon" src={img1} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                    <Grid className="occasion-icon-holder" item xs={4} md={2}>
                        <ButtonBase href="category/27">
                            <img className="occasion-icon" src={img2} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                    <Grid className="occasion-icon-holder" item xs={4} md={2}>
                        <ButtonBase href="category/32">
                            <img className="occasion-icon" src={img3} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                    <Grid className="occasion-icon-holder" item xs={4} md={2}>
                        <ButtonBase href="category/28">
                            <img className="occasion-icon" src={img4} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                    <Grid className="occasion-icon-holder" item xs={4} md={2}>
                        <ButtonBase href="category/29">
                            <img className="occasion-icon" src={img5} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                    <Grid className="occasion-icon-holder" item xs={4} md={2}>
                        <ButtonBase href="category/33">
                            <img className="occasion-icon" src={img6} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                </Grid>
                <SeeAllButton href={urlGenerator.get({ page: 'Occasions' })}>See all occasions</SeeAllButton>
            </Box>
​
        </div>
    )
}