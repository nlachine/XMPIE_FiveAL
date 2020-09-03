import React from 'react';
import { Grid, Box, ButtonBase, Typography } from '@material-ui/core';
import HoverImage from 'react-hover-image';
import ImgOne from '../../assets/images/Birthday.png';
import ImgTwo from '../../assets/images/Baby.png';
import ImgThree from '../../assets/images/Bridesmaids.png';
import ImgFour from '../../assets/images/Christmas.png';
import ImgFive from '../../assets/images/Easter.png';
import ImgSix from '../../assets/images/Corporate.png';
import ImgSeven from '../../assets/images/Friendship.png';
import ImgEight from '../../assets/images/Graduation.png';

import ImgOneHover from '../../assets/images/Birthday_Active.png';
import ImgTwoHover from '../../assets/images/Baby_Active.png';
import ImgThreeHover from '../../assets/images/Bridesmaids_Active.png';
import ImgFourHover from '../../assets/images/Christmas_Active.png';
import ImgFiveHover from '../../assets/images/Easter_Active.png';
import ImgSixHover from '../../assets/images/Corporate_Active.png';
import ImgSevenHover from '../../assets/images/Friendship_Active.png';
import ImgEightHover from '../../assets/images/Graduation_Active.png';

import BoxOne from '../../assets/images/BoxBannerGif.gif';
import './materialUIBanner.css';


function materialUIBanner(props) {
    return (
        <Box className="hero-image">
            <Grid className="hero-container" container spacing={3} direction="row" justify="center" alignItems="center">
                {/* Main Content Container */}
                <Grid container item xs={12} direction="row" justify="center" alignItems="center">
                    {/* Main Content Left */}
                    <Grid item xs={12} md={7} spacing={3} textAlign="center">
                        <Typography className="title-h3" variant="h3">{props.title}</Typography>
                        <Typography className="title-h5" variant="h5" gutterBottom="true">{props.titleInfo}</Typography>
                        <Typography className="title-h6" variant="h6" gutterBottom="true">{props.subtitle}</Typography>
                        {/* Occasion Grid */}
                        <Grid container item md={12} direction="row" justify="flex-start" spacing={8}>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase className="grid-btn-base">
                                    <div className="icon-btn-container">
                                        <HoverImage className="grid-img" src={ImgOne} hoverSrc={ImgOneHover}></HoverImage>
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase className="grid-btn-base">
                                    <div className="icon-btn-container">
                                        <HoverImage className="grid-img" src={ImgTwo} hoverSrc={ImgTwoHover}></HoverImage>
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase className="grid-btn-base">
                                    <div className="icon-btn-container">
                                        <HoverImage className="grid-img" src={ImgThree} hoverSrc={ImgThreeHover}></HoverImage>
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase className="grid-btn-base">
                                    <div className="icon-btn-container">
                                        <HoverImage className="grid-img" src={ImgFour} hoverSrc={ImgFourHover}></HoverImage>
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase className="grid-btn-base">
                                    <div className="icon-btn-container">
                                        <HoverImage className="grid-img" src={ImgFive} hoverSrc={ImgFiveHover}></HoverImage>
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase className="grid-btn-base">
                                    <div className="icon-btn-container">
                                        <HoverImage className="grid-img" src={ImgSix} hoverSrc={ImgSixHover}></HoverImage>
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase className="grid-btn-base">
                                    <div className="icon-btn-container">
                                        <HoverImage className="grid-img" src={ImgSeven} hoverSrc={ImgSevenHover}></HoverImage>
                                    </div>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <ButtonBase className="grid-btn-base">
                                    <div className="icon-btn-container">
                                        <HoverImage className="grid-img" src={ImgEight} hoverSrc={ImgEightHover}></HoverImage>
                                    </div>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Main Content Spacer */}
                    <Grid item xs={0} md={0} />
                    {/* Main Content Right */}
                    <Grid className="bannerInfo" item xs={0} md={5} spacing={3}>
                        <img src={BoxOne} alt="Occassion" />
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
}

export default materialUIBanner;