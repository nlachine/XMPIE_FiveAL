import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import './SplitDescriptionRight.scss';

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
        backgroundColor: "#f3d0a3",
        color: theme.palette.getContrastText("#f3d0a3"),
        '&:hover': {
            backgroundColor: "#eaad5f",
            color: theme.palette.getContrastText("#eaad5f"),
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
            fontSize: '0.6rem',
        },
    }
}))(Button);

const BoxTitle = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 'bold',
        typeTransform: 'uppercase',
        color: 'white',
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
        background: '#ec5f58',
    },
}))(Box);


function SplitDescriptionRight2(props) {
    return (
        <Box className="split-box-right">
            <Grid className="split-container" container spacing={0} direction="row" justify="center" alignItems="center">
                <Grid item xs={6}>
                    <Box className="split-box-image-container">
                        <img className="split-box-image" src={props.image} alt="LeftImage" />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <BoxColor className="split-box-text">
                        <BoxTitle gutterBottom="true">{props.title}</BoxTitle>
                        <SplitDescriptionButton
                            variant="outlined"
                            fullWidth="false"
                            size="large"
                            disableElevation
                        >{props.buttonText}</SplitDescriptionButton>
                    </BoxColor>
                </Grid>
            </Grid>
        </Box >
    );
}

export default SplitDescriptionRight2;