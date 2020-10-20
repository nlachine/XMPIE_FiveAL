import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { withStyles } from '@material-ui/core/styles';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from '@material-ui/core';

// import 'form.scss'

const SendFormButton = withStyles((theme) => ({
    root: {
        margin:'0px 0px 0px 0px',
        fontSize: '1rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        width: '100%',
        color: '#fff',
        backgroundColor: "#ec5f58",
        '&:hover': {
            backgroundColor: "#bc4c46",
            color: theme.palette.getContrastText("#bc4c46"),
        },
        border: 'none',
        outline: 'none'
    },
}))(Button);


class ContactUs extends Component {
    state = {
        formSubmitted: true
    };

    sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ka4mfys', 'contact_form', e.target, 'user_ERlpKXVrvQpPYkDC18mW3')
        .then((result) => {
            console.log(result.text);
            console.log(this.state);
            this.setState({
                formSubmitted: this.state.formSubmitted === null ? true : false
            });
            console.log(this.state)
        }, (error) => {
            console.log(error.text);
        });
    }
    render(){
        return (
            <div>
        <div className="showName"
                style={{ display : this.state.formSubmitted ? "block" : "none" }}>  
        <Form className="contact-form" onSubmit={this.sendEmail}>
            
            <input type="hidden" name="contact_number" />
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="user_name" />
            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="user_email" />
            </FormGroup>
            <FormGroup>
                <Label>Message</Label>
                <Input type="textarea" name="message" />
            </FormGroup>

            <SendFormButton className="sendContactForm">Send</SendFormButton>
        </Form>
        </div>

        <div className="showName"
        style={{ display : this.state.formSubmitted ? "none" : "block" }}>  
            Thanks for submitting the inquiry. We will get back to you shortly.<br/><br/>
            5am Lemon Team<br/>
            - hello@5amlemon.com
        </div>
        </div>
        );
    }
}
export default ContactUs