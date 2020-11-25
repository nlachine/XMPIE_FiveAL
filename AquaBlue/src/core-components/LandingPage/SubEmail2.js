import React from 'react'
import { TextField, Grid, Button, Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Mailchimp from 'react-mailchimp-form'

import './SubEmail2.scss';


//const url = "https://5amlemon.us2.list-manage.com/subscribe/post?u=ac366de6605f1529b50e05c73&id=2d8d0c340e";

const Title = withStyles((theme) => ({
    root: {
        fontSize: '2.4rem',
        fontFamily: 'Montserrat, Arial, sans-serif',        
        color: '#63666A',
        textAlign: 'center',
        paddingBottom: '0px'
    },

    '@media (max-width: 959px)': {
        root: {
            fontSize: '1.75rem',
        },
    },

    '@media (max-width: 600px)': {
        root: {
            fontSize: '1.25rem',
        },
    }
}))(Typography);

const SubTitle = withStyles((theme) => ({
    root: {
        fontSize: '1rem',
        fontFamily: 'Montserrat, Arial, sans-serif',        
        color: '#63666A',
        textAlign: 'center',
        paddingBottom: '10px'
    },

    '@media (max-width: 959px)': {
        root: {
            fontSize: '1rem',
        },
    },

    '@media (max-width: 600px)': {
        root: {
            fontSize: '0.8rem',
        },
    }
}))(Typography);

export default function SubEmail() {
    return (
        <div className="email-sub-wrapper">
            
            <div className="email-sub-container">

            <Title>GET ALL THE <span className="juicydeets">juicy deets</span></Title>

            <SubTitle>NEW PRODUCTS, SPECIAL OFFERS AND PROMOTIONS</SubTitle>

            <Mailchimp
                action='https://5amlemon.us2.list-manage.com/subscribe/post?u=ac366de6605f1529b50e05c73&id=2d8d0c340e'
                fields={[
                {
                    name: 'EMAIL',
                    placeholder: 'ENTER YOUR EMAIL',
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
                    button: "SIGN ME UP!"
                }
                }
                className='SubscribeEmail'
                />

            </div>
        </div>
    )
}
