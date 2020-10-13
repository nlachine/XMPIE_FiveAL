import React from 'react'
import { TextField, Grid, Button, Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './SubEmail.scss';


// import MailchimpSubscribe from 'react-mailchimp-subscribe'

// const url = "https://5amlemon.us2.list-manage.com/subscribe/post?u=ac366de6605f1529b50e05c73&id=2d8d0c340e";


// const SimpleForm = () => <MailchimpSubscribe url={url}/>

// const SubscribeButton = withStyles((theme) => ({
//     root: {
//         fontSize: '1rem',
//         fontFamily: 'Montserrat, Arial, sans-serif',
//         width: '60%',
//         height: '55px',
//         color: '#fff',
//         background: '#1C8283',
//         '&:hover': {
//             backgroundColor: "#F9DC2F",
//             color: "#1C8283",
//         },
//         border: 'none',
//         outline: 'none',
//         mmarginTop: '20px'
//     },
// }))(Button);

// const SubscribeInput = withStyles((theme) => ({
//     root: {
//         fontSize: '1rem',
//         fontFamily: 'Montserrat, Arial, sans-serif',
//         width: '60%',
//         height: '55px',
//         '& label.Mui-focused': {
//             color: '#1C8283',
//         },
//         '& .MuiInput-underline:after': {
//             borderBottomColor: '#1C8283',
//         },
//         '& .MuiOutlinedInput-root': {
//             '&.Mui-focused fieldset': {
//                 borderColor: '#1C8283',
//             },
//         },
//     },

//     '@media (max-width: 600px)': {
//         root: {
//             fontSize: '0.8rem',
//             maxWidth: '300px',
//         },
//     }
// }))(TextField);

// const Title = withStyles((theme) => ({
//     root: {
//         fontSize: '3rem',
//         fontFamily: 'Montserrat, Arial, sans-serif',
//         fontWeight: 'bold',
//         typeTransform: 'uppercase',
//         color: 'black',
//         textAlign: 'center',
//         paddingBottom: '20px'
//     },

//     '@media (max-width: 959px)': {
//         root: {
//             fontSize: '2.25rem',
//         },
//     },

//     '@media (max-width: 600px)': {
//         root: {
//             fontSize: '1.5rem',
//         },
//     }
// }))(Typography);


// export default function SubEmail() {
//     return (
//         <div className="email-subscription-wrapper">
            
//             <div className="email-subscription-container">

//             <Title>Join the early risers</Title>
                
//                 <form noValidate autoComplete="off">
//                     <SubscribeInput 
//                         id="outlined-basic" 
//                         variant="outlined" 
//                         label="Email" 
//                         colord="black" />

//                 <SubscribeButton 
//                     variant="contained"
//                     className="button">
//                         Subscribes
//                 </SubscribeButton>

//                 </form>
//                 <SimpleForm>
//                 </SimpleForm>

//             </div>
//         </div>
//     )
// }
