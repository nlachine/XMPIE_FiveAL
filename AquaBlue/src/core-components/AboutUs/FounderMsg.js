import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import './FounderMsg.scss';
import { withStyles } from '@material-ui/core/styles';

const BoxTitle = withStyles((theme) => ({
    root: {
        fontSize: '4rem',
        // fontFamily: 'Montserrat, Arial, sans-serif',
        fontStyle: 'italic',
        color: '#fff',
        marginLeft: '-100px',
        maxWidth: '100%',
        textAlign: 'left'
    },

    '@media (max-width: 959px)': {
        root: {
            fontSize: '2.25rem',
        },
    },

    '@media (max-width: 600px)': {
        root: {
            fontSize: '1.5rem',
        },
    }
}))(Typography);

const BoxCopy = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        // fontFamily: 'Montserrat, Arial, sans-serif',
        color: '#666',
        marginLeft: '20px',
        maxWidth: '70%',
        textAlign: 'left'
    },

    '@media (max-width: 959px)': {
        root: {
            fontSize: '1rem',
        },
    },

    '@media (max-width: 600px)': {
        root: {
            fontSize: '0.75rem',
        },
    }
}))(Typography);

const BoxSignature = withStyles((theme) => ({
    root: {
        fontSize: '1.5rem',
        fontFamily: '"Dancing Script",cursive',
        color: '#666',
        marginLeft: '20px',
        maxWidth: '70%',
        textAlign: 'left'
    },

    '@media (max-width: 959px)': {
        root: {
            fontSize: '1rem',
        },
    },

    '@media (max-width: 600px)': {
        root: {
            fontSize: '0.75rem',
        },
    }
}))(Typography);

const BoxColor = withStyles((theme) => ({
    root: {
        background: '#f9dc2f',
    },
}))(Box);

const BoxColor2 = withStyles((theme) => ({
    root: {
        background: '#666',
    },
}))(Box);

function FounderMsg(props) {
    return (
        <Box className="foundermsg-box-right">
            <Grid className="foundermsg-container" container spacing={0} direction="row" justify="center" alignItems="center">
                <Grid item xs={5}>
                    <BoxColor2 className="foundermsg-box-image-container">
                    </BoxColor2>
                </Grid>
                <Grid item xs={7}>
                    <BoxColor className="foundermsg-box-text">
                        <BoxTitle className="title" gutterBottom="true">{props.title}</BoxTitle>
                        <BoxCopy className="subtitle">
                            <p>The idea and concept of  5am Lemon came to me in the heart of the first wave of Covid-19.  The entire world was socially distancing and keeping their social “bubbles” to immediate family members. We were having cocktail parties on Zoom and Weddings, Graduations, and Proms all had to been cancelled.  We were connecting virtually with everyone but the personal “touch and feel” connection was almost non-existent. </p>
                            <p>My daughter who had embraced every day of her 4 year University life and already in January was dreading it being over had to face the harsh reality of moving home early and celebrating online.  I wanted to make her graduation special to help compensate for the less than engaging online ceremony, I plastered our garage doors with funny Grad posters and with my team at my Marketing Kitchen we created a customized Grad Greeting Card and Gift Box that included pictures of her and her roommates from her Instagram account.   The response to the creation showed me that there was market for this combo greeting card and gift box that could be easily customized online and sent with simple and thoughtful words and sentiments to send joy and show someone you care.</p>
                            <p>The name “5am Lemon” comes from being an early riser and starting each morning off right with warm lemon water that vitalizes you from within, kick starts your metabolism, and is an ideal antioxidant boost.    Each 5am Lemon box you send will bring energy and joy to both you and your lucky recipient.</p>
                            <p>Thank you for visiting 5am Lemon and we hope you enjoy your creations.</p>                        
                        </BoxCopy>
                        <BoxSignature gutterBottom="signature">Audrey</BoxSignature>
                    </BoxColor>
                </Grid>
            </Grid>
        </Box >
    );
}

export default FounderMsg;