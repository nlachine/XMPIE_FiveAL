import React from 'react'
import { TextField, Grid, Button, Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Mailchimp from 'react-mailchimp-form'

import './SubEmail2.scss';


//const url = "https://5amlemon.us2.list-manage.com/subscribe/post?u=ac366de6605f1529b50e05c73&id=2d8d0c340e";

const Title = withStyles((theme) => ({
    root: {
        fontSize: '3rem',
        // fontFamily: 'Montserrat, Arial, sans-serif',
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

export default function SubEmail() {
    return (
        <div className="email-subscription-wrapper">
            
            <div className="email-subscription-container">

            <Title>JOIN THE <span className="earlyrisers">early risers</span></Title>

            <Mailchimp
                action='https://5amlemon.us2.list-manage.com/subscribe/post?u=ac366de6605f1529b50e05c73&id=2d8d0c340e'
                fields={[
                {
                    name: 'EMAIL',
                    placeholder: 'Email',
                    type: 'email',
                    required: true
                }
                ]}
                messages = {
                {
                    sending: "Sending...",
                    success: "Thank you for subscribing!",
                    error: "An unexpected internal error has occurred.",
                    empty: "You must write an e-mail.",
                    duplicate: "Too many subscribe attempts for this email address",
                    button: "Subscribe!"
                }
                }
                className='SubscribeEmail'
                />

            </div>
        </div>
    )
}
