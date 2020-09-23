import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Grid, ButtonBase, Box, Typography } from '@material-ui/core';
import HoverImage from 'react-hover-image';
import './TopCategories.scss';

import ImgOne from '../../assets/images/ThankYou.png';
import ImgOneHover from '../../assets/images/ThankYou_Active.png';
import ImgTwo from '../../assets/images/Sympathy.png';
import ImgTwoHover from '../../assets/images/Sympathy_Active.png';
import ImgThre from '../../assets/images/Friendship.png';
import ImgThreeHover from '../../assets/images/Friendship_Active.png';
import ImgFour from '../../assets/images/Birthday.png';
import ImgFourHover from '../../assets/images/Birthday_Active.png';
import ImgFive from '../../assets/images/Congratulations.png';
import ImgFiveHover from '../../assets/images/Congratulations_Active.png';
import ImgSix from '../../assets/images/Christmas.png';
import ImgSixHover from '../../assets/images/Christmas_Active.png';


const TopCategoriesLabel = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        color: 'black',
        paddingTop: '20px',
    },
}))(Typography);

export default function TopCategories() {
    return (
        <div className="topcategories-wrapper">
            <Box className="topcategories-container">
                <Grid className="topcategories-container" container direction="row" justify="center" alignItems="center" spacing={10}>
                    <Grid item xs={6} sm={3}>
                        {/* Thank you */}
                        <ButtonBase className="grid-button-base" href="http://vpn.marketingkitchen.ca/ustorethemes/FALVersionOne/7/en-US/category/33">
                            <div className="icon-button-container">
                                <HoverImage className="icon" src={ImgOne} hoverSrc={ImgOneHover}></HoverImage>
                                {/* <TopCategoriesLabel>Birthday</TopCategoriesLabel> */}
                            </div>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        {/* Sympathy */}
                        <ButtonBase className="grid-button-base" href="http://vpn.marketingkitchen.ca/ustorethemes/FALVersionOne/7/en-US/category/32">
                            <div className="icon-button-container">
                                <HoverImage className="icon" src={ImgTwo} hoverSrc={ImgTwoHover}></HoverImage>
                                {/* <TopCategoriesLabel>New Born</TopCategoriesLabel> */}
                            </div>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        {/* Friendship */}
                        <ButtonBase className="grid-button-base" href="http://vpn.marketingkitchen.ca/ustorethemes/FALVersionOne/7/en-US/category/30">
                            <div className="icon-button-container">
                                <HoverImage className="icon" src={ImgThre} hoverSrc={ImgThreeHover}></HoverImage>
                                {/* <TopCategoriesLabel>Christmas</TopCategoriesLabel> */}
                            </div>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        {/* Birthday */}
                        <ButtonBase className="grid-button-base" href="http://vpn.marketingkitchen.ca/ustorethemes/FALVersionOne/7/en-US/category/27/">
                            <div className="icon-button-container">
                                <HoverImage className="icon" src={ImgFour} hoverSrc={ImgFourHover}></HoverImage>
                                {/* <TopCategoriesLabel>Easter</TopCategoriesLabel> */}
                            </div>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        {/* Congratulations */}
                        <ButtonBase className="grid-button-base" href="http://vpn.marketingkitchen.ca/ustorethemes/FALVersionOne/7/en-US/category/28/">
                            <div className="icon-button-container">
                                <HoverImage className="icon" src={ImgFive} hoverSrc={ImgFiveHover}></HoverImage>
                                {/* <TopCategoriesLabel>Friendship</TopCategoriesLabel> */}
                            </div>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        {/* Holiday */}
                        <ButtonBase className="grid-button-base" href="http://vpn.marketingkitchen.ca/ustorethemes/FALVersionOne/7/en-US/category/29/">
                            <div className="icon-button-container">
                                <HoverImage className="icon" src={ImgSix} hoverSrc={ImgSixHover}></HoverImage>
                                {/* <TopCategoriesLabel>Corporate</TopCategoriesLabel> */}
                            </div>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} sm={3}>

                        <ButtonBase className="grid-button-base">
                            <div className="icon-button-container">
                                <HoverImage className="icon" src={ImgFive} hoverSrc={ImgFiveHover}></HoverImage>
                                {/* <TopCategoriesLabel>Friendship</TopCategoriesLabel> */}
                            </div>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <ButtonBase className="grid-button-base">
                            <div className="icon-button-container">
                                <HoverImage className="icon" src={ImgSix} hoverSrc={ImgSixHover}></HoverImage>
                                {/* <TopCategoriesLabel>Corporate</TopCategoriesLabel> */}
                            </div>
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
