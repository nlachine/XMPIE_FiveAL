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

const CategoryLabel = withStyles((theme) => ({
    root: {
        fontSize: '1.5rem',
        color: 'white',
        fontStyle: 'none',
        textDecoration: 'none',
        textAlign: 'center',
        lineHeight: '90px',
        fontFamily: 'Montserrat, sans-serif'
    },
    '@media (max-width: 1200px)': {
        root: {
            fontSize: '1.75rem',
            lineHeight: '90',
        },
    },
    '@media (max-width: 949px)': {
        root: {
            fontSize: '2rem',
            lineHeight: '190px',
        },
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '1rem',
            lineHeight: '90px',
        },
    }
}))(Typography);

const CategoryBox = withStyles((theme) => ({
    root: {
        width: '300px',
        height: '100px',
    },
    '@media (max-width: 1200px)': {
        root: {
            width: '150px',
            height: '150px',
        },
    },
    '@media (max-width: 949px)': {
        root: {
            width: '200px',
            height: '200px',
        },
    },
    '@media (max-width: 600px)': {
        root: {
            width: '110px',
            height: '110px',
        },
    }
}))(Box);


export default function TopCategories() {
    return (
        <div className="topcategories-wrapper">
            <Box className="topcategories-container">
                <Grid className="topcategories-container" container direction="row" justify="center" alignItems="center" spacing={5}>
                    <Grid item xs={6} md={3}>
                        {/* Thank you */}
                        <ButtonBase className="grid-button-base" href="http://5amLemon.com/ustorethemes/FALVersionOne/7/en-US/category/33">
                            <CategoryBox className="icon-button-container">
                                <CategoryLabel>Thank you</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgOne} hoverSrc={ImgOneHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>Birthday</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {/* Sympathy */}
                        <ButtonBase className="grid-button-base" href="http://5amLemon.com/ustorethemes/FALVersionOne/7/en-US/category/32">
                            <CategoryBox className="icon-button-container">
                                <CategoryLabel>Sympathy</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgTwo} hoverSrc={ImgTwoHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>New Born</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {/* Friendship */}
                        <ButtonBase className="grid-button-base" href="http://5amLemon.com/ustorethemes/FALVersionOne/7/en-US/category/30">
                            <CategoryBox className="icon-button-container">
                                <CategoryLabel>Friendship</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgThre} hoverSrc={ImgThreeHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>Christmas</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {/* Birthday */}
                        <ButtonBase className="grid-button-base" href="http://5amLemon.com/ustorethemes/FALVersionOne/7/en-US/category/27/">
                            <CategoryBox className="icon-button-container">
                                <CategoryLabel>Birthday</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgFour} hoverSrc={ImgFourHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>Easter</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {/* Congratulations */}
                        <ButtonBase className="grid-button-base" href="http://5amLemon.com/ustorethemes/FALVersionOne/7/en-US/category/28/">
                            <CategoryBox className="icon-button-container">
                                <CategoryLabel>Congratulations</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgFive} hoverSrc={ImgFiveHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>Friendship</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {/* Holiday */}
                        <ButtonBase className="grid-button-base" href="http://5amLemon.com/ustorethemes/FALVersionOne/7/en-US/category/29/">
                            <CategoryBox className="icon-button-container">
                                <CategoryLabel>Holiday</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgSix} hoverSrc={ImgSixHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>Corporate</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} md={3}>

                        <ButtonBase className="grid-button-base">
                            <CategoryBox className="icon-button-container">
                                <CategoryLabel>Placeholder</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgFive} hoverSrc={ImgFiveHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>Friendship</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <ButtonBase className="grid-button-base">
                            <CategoryBox className="icon-button-container">
                                <CategoryLabel>Placeholder</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgSix} hoverSrc={ImgSixHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>Corporate</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
