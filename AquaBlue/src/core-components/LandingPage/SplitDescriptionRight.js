import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import './SplitDescriptionRight.scss';

import { withStyles } from '@material-ui/core/styles';
const SplitDescriptionButton = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        width: '300px',
        marginTop: '100px',
        color: '#fff',
        backgroundColor: "#ec5f58",
        '&:hover': {
            backgroundColor: "#bc4c46",
            color: theme.palette.getContrastText("#bc4c46"),
        },
        border: 'none',
    },
}))(Button);

function SplitDescriptionRight(props) {
    return (
        <Box className="split-box-right">
            <Grid className="split-container" container spacing={0} direction="row" justify="center" alignItems="center">
                <Grid item xs={6}>
                    <Box className="split-box-image-container">
                        <img className="split-box-image" src={props.image} alt="LeftImage" />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className="split-box-text">
                        <Typography variant="h3" gutterBottom="true">{props.title}</Typography>
                        <SplitDescriptionButton
                            variant="outlined"
                            fullWidth="false"
                            size="large"
                            disableElevation
                        >{props.buttonText}</SplitDescriptionButton>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
}

export default SplitDescriptionRight;