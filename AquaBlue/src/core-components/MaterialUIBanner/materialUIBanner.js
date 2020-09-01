import React from 'react';
import { Grid, Box, ButtonBase, Typography } from '@material-ui/core';
import ImgOne from '../../assets/images/Birthday.png';
import ImgTwo from '../../assets/images/Baby.png';
import ImgThree from '../../assets/images/Bridesmaids.png';
import ImgFour from '../../assets/images/Christmas.png';
import ImgFive from '../../assets/images/Easter.png';
import ImgSix from '../../assets/images/Corporate.png';
import ImgSeven from '../../assets/images/Friendship.png';
import ImgEight from '../../assets/images/Graduation.png';
import BoxOne from '../../assets/images/BoxStages-01.png';

import './materialUIBanner.css';


function materialUIBanner(props) {
    return (
        <Box className="hero-image">
            <Grid className="hero-container" container spacing={3} direction="row" justify="center" alignItems="center">
                {/* Left Gutter */}
                <Grid item xs={0} />
                {/* Main Content Container */}
                <Grid container item xs={12} direction="row" justify="center" alignItems="center">
                    {/* Main Content Left */}
                    <Grid item xs={12} md={6} spacing={3} textAlign="center">
                        <Typography className="title-h3" variant="h3">{props.title}</Typography>
                        <Typography className="title-h5" variant="h5" gutterBottom="true">{props.titleInfo}</Typography>
                        <Typography className="title-h6" variant="h6" gutterBottom="true">{props.subtitle}</Typography>
                        {/* Occasion Grid */}
                        <Grid container direction="row" justify="flex-start" spacing={6}>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase>
                                    <div className="icon-btn-container">
                                        <img className="grid-img" src={ImgOne} alt="Occassion" />
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase>
                                    <div className="icon-btn-container">
                                        <img className="grid-img" src={ImgTwo} alt="Occassion" />
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase>
                                    <div className="icon-btn-container">
                                        <img className="grid-img" src={ImgThree} alt="Occassion" />
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase>
                                    <div className="icon-btn-container">
                                        <img className="grid-img" src={ImgFour} alt="Occassion" />
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase>
                                    <div className="icon-btn-container">
                                        <img className="grid-img" src={ImgFive} alt="Occassion" />
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase>
                                    <div className="icon-btn-container">
                                        <img className="grid-img" src={ImgSix} alt="Occassion" />
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase>
                                    <div className="icon-btn-container">
                                        <img className="grid-img" src={ImgSeven} alt="Occassion" />
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase>
                                    <div className="icon-btn-container">
                                        <img className="grid-img" src={ImgEight} alt="Occassion" />
                                    </div>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Main Content Spacer */}
                    <Grid item xs={0} md={2} />
                    {/* Main Content Right */}
                    <Grid className="bannerInfo" item xs={0} md={4} spacing={3}>
                        <img src={BoxOne} alt="Occassion" />
                    </Grid>
                </Grid>
                {/* Right Gutter */}
                <Grid item xs={0} />
            </Grid>
        </Box >
    );
}

export default materialUIBanner;