import React, { Component } from 'react';

import Sub from './Sub';
import './ComingSoon.scss'
import falLogo from './../../assets/images/FiveAmLemon_Logo_Yellow.png'

export default class ComingSoon extends Component {

    render() {
        return (
            <div className="ComingSoon-Wrapper">
                <div className="ComingSoon-Container">
                    <div className="logo">
                        <img src={falLogo} width="250px"></img>
                    </div>
                    <div className="intro">
                        <p>We're getting ready to launch something</p>
                        <span className="delight">delightful...</span>
                    </div>
                    <div className="signup">
                        <p>Sign up to get fresh news on our upcoming launch!</p>
                        <Sub/>  
                    </div>
                </div>
            </div>
        )
    }
}
