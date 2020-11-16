import React from 'react';
import { ButtonBase } from '@material-ui/core';
import urlGenerator from '$ustoreinternal/services/urlGenerator'


import './HeroBanner.scss';

export default function HeroBanner() {
    return (
        <div className="hero-wrapper">
            <div className="hero-container">
                <div className="hero-table">
                    <h1 className="hero-cta">Tis' the season to send a greeting card box that will <span className="shakies-line"><span className="hero-cta-shakies">surprise</span> and <span className="hero-cta-shakies">delight</span></span></h1>
                    <h3 className="hero-subcta">Spread some cheer this time of year</h3>
                    <ButtonBase className="hero-cta-button" href={urlGenerator.get({ page: 'Occasions' })}>Get Started</ButtonBase>
                </div>
            </div>
        </div>
    )
}
