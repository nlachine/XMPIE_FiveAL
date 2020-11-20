import { ButtonBase, Grid } from '@material-ui/core';
import React from 'react';
import './CorpStrip.scss';



export default function CorpStrip1() {
    return (
        <div className="strip-wrapper">
            <div className="strip-container TextLeft">
                <div className="strip-image Corp1"/>
                <div className="strip-table LightTeal">
                    <div className="strip-text">
                        <h2 className="strip-title">recognize your best clients in a <span className="strip-title-shakies Teal">unique</span> and <span className="strip-title-shakies Teal">personal</span> way</h2>
                        <h4 className="strip-subtitle">You don’t need an occasion to show your clients how grateful you are for their loyalty and continued partnership.</h4>
                        <ButtonBase className="strip-cta-button Teal">Contact Us</ButtonBase>
                    </div>
                </div>
            </div>
        </div>
    )
}