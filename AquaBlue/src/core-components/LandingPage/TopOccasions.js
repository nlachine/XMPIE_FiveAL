import React from 'react'
import { Box, Grid, Typography, Button, ButtonBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import urlGenerator from '$ustoreinternal/services/urlGenerator';
import './TopOccasions.scss';


import img1 from '../../assets/images/O-BirthdayCard.png';
import img2 from '../../assets/images/O-Holiday.png';
import img3 from '../../assets/images/O-JustBecause.png';
import img4 from '../../assets/images/O-Sympathy.png';
import img5 from '../../assets/images/O-Congratulations.png';
import img6 from '../../assets/images/O-Thankyou.png';
import img7 from '../../assets/images/O-Baby.png';


export default function TopEvent() {
    return (
        <div className="top-event-wrapper">
            <Box className="top-event-container">
                <Grid container className="events" 
                    direction="row" 
                    justify="center" 
                    alignItems="center" 
                    spacing={1}>
                    <Grid className="occasion-icon-holder" item sm={4} md={3} align="center"> 
                        <ButtonBase href={urlGenerator.get({ page: 'Category', id: '27'})}>
                            <div className="occLabel">Birthday</div>
                            <img className="occasion-icon" src={img1} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                    <Grid className="occasion-icon-holder" item sm={4} md={3}>
                        <ButtonBase href={urlGenerator.get({ page: 'Category', id: '27'})}>
                        <div className="occLabel">Holiday</div>
                            <img className="occasion-icon" src={img2} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                    <Grid className="occasion-icon-holder" item sm={4} md={3}>
                        <ButtonBase href="category/32">
                        <div className="occLabel">Celebration</div>
                            <img className="occasion-icon" src={img3} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                    <Grid className="occasion-icon-holder" item sm={4} md={3}>
                        <ButtonBase href={urlGenerator.get({ page: 'Category', id: '32'})}>                        
                        <div className="occLabel">Sympathy</div>
                            <img className="occasion-icon" src={img4} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                    <Grid className="occasion-icon-holder" item sm={4} md={3}>
                        <ButtonBase href={urlGenerator.get({ page: 'Category', id: '27'})}>
                        <div className="occLabel">Congratulations</div>
                            <img className="occasion-icon" src={img5} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                    <Grid className="occasion-icon-holder" item sm={4} md={3}>
                        <ButtonBase href={urlGenerator.get({ page: 'Category', id: '33'})}>
                        <div className="occLabel">Thank You</div>
                            <img className="occasion-icon" src={img6} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                    <Grid className="occasion-icon-holder" item sm={4} md={3}>
                        <ButtonBase href={urlGenerator.get({ page: 'Category', id: '30'})}>
                        <div className="occLabel">Baby</div>
                            <img className="occasion-icon" src={img7} alt="Occasion" />
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Box>
​
        </div>
    )
}