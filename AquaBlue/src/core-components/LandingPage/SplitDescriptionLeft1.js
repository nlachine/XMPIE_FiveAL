import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import './SplitDescriptionLeft.scss';


import { withStyles } from '@material-ui/core/styles';
const SplitDescriptionButton = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 'bold',
        typeTransform: 'uppercase',
        width: '50%',
        marginTop: '100px',
        color: '#fff',
        backgroundColor: "#ec5f58",
        color: theme.palette.getContrastText("#ec5f58"),
        '&:hover': {
            backgroundColor: "#bc4c46",
            color: theme.palette.getContrastText("#bc4c46"),
        },
        border: 'none',

    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '0.9rem',
            marginTop: '25px',
        },
    },
    '@media (max-width: 600px)': {
        root: {
            fontSize: '0.75rem',
            marginTop: '25px',
        },
    },
    '@media (max-width: 400px)': {
        root: {
            fontSize: '0.60rem',
        },
    }
}))(Button);

const BoxTitle = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 'bold',
        typeTransform: 'uppercase',
        color: '#fff',
        paddingBottom: '0px',
        maxWidth: '70%',
        textAlign: 'center'
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
    },
    '@media (max-width: 400px)': {
        root: {
            fontSize: '1.25rem',
        },
    }
}))(Typography);

const BoxColor = withStyles((theme) => ({
    root: {
        background: '#f3d0a3',
    },
}))(Box);

function SplitDescriptionLeft1(props) {
    return (
        <Box className="split-box-left">
            <Grid className="split-container" container spacing={0} direction="row" justify="center" alignItems="center">
                <Grid item xs={6}>
                    <BoxColor className="split-box-text">
                        <BoxTitle>{props.title}</BoxTitle>
                        <SplitDescriptionButton
                            variant="outlined"
                            fullWidth="false"
                            size="large"
                            disableElevation
                        >{props.buttonText}</SplitDescriptionButton>
                    </BoxColor>
                </Grid>
                <Grid item xs={6}>
                    <Box className="split-box-image-container">
                        <img className="split-box-image" src={props.image} alt="LeftImage" />
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
}

export default SplitDescriptionLeft1;