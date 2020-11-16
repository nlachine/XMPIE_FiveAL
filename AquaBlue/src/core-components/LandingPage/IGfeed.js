import React from 'react'
import { TextField, Grid, Button, Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Mailchimp from 'react-mailchimp-form'
import Feed from "react-instagram-authless-feed"

import './IGfeed.scss';



const Title = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        typeTransform: 'uppercase',
        color: 'black',
        textAlign: 'center',
        paddingBottom: '20px'
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

export default function IGFeed() {
    return (
        <div className="igfeed-wrapper">
            <Feed userName="thegoodboxgifts" className="Feed" classNameLoading="Loading" limit="6"/>           
        </div>
    )
}
