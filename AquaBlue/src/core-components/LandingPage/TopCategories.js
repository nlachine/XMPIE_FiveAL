import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Grid, ButtonBase, Box, Typography } from '@material-ui/core';
import HoverImage from 'react-hover-image';
import './TopCategories.scss';
import {Link} from '$routes';
import urlGenerator from '$ustoreinternal/services/urlGenerator';

import birthday from '../../assets/images/O-Birthday.png'
import sympathy from '../../assets/images/O-Sympathy.png'


// const TopCategoriesLabel = withStyles((theme) => ({
//     root: {
//         fontSize: '1rem',
//         color: 'black',
//         paddingTop: '20px',
//     },
// }))(Typography);

const CategoryLabel = withStyles((theme) => ({
    root: {
        fontSize: '1.55rem',
        color: 'black',
        fontStyle: 'none',
        textDecoration: 'none',
        textAlign: 'center',
        lineHeight: '140px',
        fontFamily: 'Montserrat, sans-serif'
    },
    '@media (max-width: 1200px)': {
        root: {
            lineHeight: '140px'
        },
    },
    '@media (max-width: 949px)': {
        root: {
            lineHeight: '140px'
        },
    },
    '@media (max-width: 600px)': {
        root: {
            lineHeight: '140px',
            fontSize: '1.2rem'
        },
    }
}))(Typography);

const CategoryBox = withStyles((theme) => ({
    root: {
        width: '100%',
        height: '150px',               
        textAlign: 'center',
        borderRadius: '7px',
        transition: '0.35s'
    },
    '@media (max-width: 1200px)': {
        root: {
            width: '100%',
            height: '150px',
        },
    },
    '@media (max-width: 949px)': {
        root: {
            width: '100%',
            height: '150px',
        },
    },
    '@media (max-width: 600px)': {
        root: {
            width: '100%',
            height: '150px',
        },
    }
}))(Box);


export default function TopCategories() {
    return (
        <div className="topcategories-wrapper">
            <Box className="occasions">
                <Grid container 
                className="topcategories-container" 
                direction="row" 
                justify="space-evenly" 
                alignItems="center" 
                spacing={1}>
                    <Grid item xs={6} md={3}>
                        {/* Thank you */}
                        <Link to={urlGenerator.get({page: "category", id: "33"})}>
                        <ButtonBase className="grid-button-base">
                        
                            <CategoryBox className="icon-button-container">
                                <CategoryLabel>Thank you</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgOne} hoverSrc{ImgOneHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>Birthday</TopCategoriesLabel> */}
                            </CategoryBox>
                            
                        </ButtonBase>
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {/* Sympathy */}
                        <Link to={urlGenerator.get({page: "category", id: "32"})}>
                        <ButtonBase className="grid-button-base">
                            <CategoryBox className="icon-button-container" >
                                <CategoryLabel>Sympathy</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgTwo} hoverSrc={ImgTwoHover}></HoverImage> 
                                {/* <TopCategoriesLabel>New Born</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {/* Friendship */}
                        <Link to={urlGenerator.get({page: "category", id: "30"})}>
                        <ButtonBase className="grid-button-base">
                            <CategoryBox className="icon-button-container">
                                <CategoryLabel>Friendship</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgThre} hoverSrc={ImgThreeHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>Christmas</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {/* Birthday */}
                        <Link to={urlGenerator.get({page: "category", id: "27"})}>
                        <ButtonBase className="grid-button-base">
                            <CategoryBox className="icon-button-container-Birthday">
                                <CategoryLabel>Birthday</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgFour} hoverSrc={ImgFourHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>Easter</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {/* Congratulations */}
                        <Link to={urlGenerator.get({page: "category", id: "28"})}>
                        <ButtonBase className="grid-button-base">
                            <CategoryBox className="icon-button-container">
                                <CategoryLabel>Congratulations</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgFive} hoverSrc={ImgFiveHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>Friendship</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {/* Holiday */}
                        <Link to={urlGenerator.get({page: "category", id: "29"})}>
                        <ButtonBase className="grid-button-base">
                            <CategoryBox className="icon-button-container-Holiday">
                                <CategoryLabel>Holiday</CategoryLabel>
                                {/* <HoverImage className="icon" src={ImgSix} hoverSrc={ImgSixHover}></HoverImage> */}
                                {/* <TopCategoriesLabel>Corporate</TopCategoriesLabel> */}
                            </CategoryBox>
                        </ButtonBase>
                        </Link>
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
