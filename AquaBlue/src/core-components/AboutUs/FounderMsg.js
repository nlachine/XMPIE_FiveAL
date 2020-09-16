import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import './FounderMsg.scss';
import { withStyles } from '@material-ui/core/styles';

const BoxTitle = withStyles((theme) => ({
    root: {
        fontSize: '4rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 'bold',
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
        fontSize: '1.5rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
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
        fontFamily: 'cursive',
        color: '#666',
        marginLeft: '20px',
        maxWidth: '70%',
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
                        <img className="foundermsg-box-image" src={props.image} alt="LeftImage" />
                    </BoxColor2>
                </Grid>
                <Grid item xs={7}>
                    <BoxColor className="foundermsg-box-text">
                        <BoxTitle className="title" gutterBottom="true">{props.title}</BoxTitle>
                        <BoxCopy gutterBottom="subtitle">{props.subtitle}</BoxCopy>
                        <BoxSignature gutterBottom="signature">Audrey</BoxSignature>
                    </BoxColor>
                </Grid>
            </Grid>
        </Box >
    );
}

export default FounderMsg;