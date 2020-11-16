import './Footer.scss'
import {Grid} from '@material-ui/core';
import React, { Component } from 'react';

import urlGenerator from '$ustoreinternal/services/urlGenerator'

/**
 * This component represents the footer in the store
 */
const Footer = () => {
  return (
    <div className="footer-wrapper">
    <div className="footer-container">    
        <img className="footer-logo" src="https://www.5amlemon.com/ustorethemes/FALVersionOne/assets/images/FiveAmLemon_Logo_Yellow.png" alt="5amLemon"/>


        <h3 className="copyright">Copyright 2020 | <a href={urlGenerator.get({ page: 'Terms' })}>Terms of Use</a> | <a href={urlGenerator.get({ page: 'Privacy' })}>Privacy Policy</a></h3>   

        {/* <Grid container className="footer-row" direction="row" justify="space-evenly" spacing={6}>
            //Footer Col 1
            <Grid item className="footer-col" xs={12} sm={2}>
                <img className="footer-logo" src="https://www.5amlemon.com/uStoreThemeCustomizations/78503b7d-68c2-4477-a7e6-c90b6b93b93b/Published/Assets/FiveAm-Logo-Yellow.png" alt="5amLemon"/>
            </Grid>
            //Footer Col 2
            <Grid item className="footer-col" xs={4} sm={3}>
                <h4 className="title-links">Links</h4>
                <ul>
                    <li><a href={urlGenerator.get({ page: 'Corporate' })}>Corporate</a></li>
                    <li><a href={urlGenerator.get({ page: 'AboutUs' })}>About Us</a></li>
                    <li><a href={urlGenerator.get({ page: 'FAQ' })}>FAQ</a></li>
                    <li><a href={urlGenerator.get({ page: 'Privacy' })}>Privacy Policy</a></li>
                    <li><a href={urlGenerator.get({ page: 'Terms' })}>Terms of Use</a></li>
                </ul>
            </Grid>
            //Footer Col 3
            <Grid item className="footer-col" xs={8} sm={4}>
                <h4 className="title-links">Contact Us</h4>
                <div className="contact-us"/>
            </Grid>
        </Grid> */}
    </div>
</div>
  )
}

export default Footer
