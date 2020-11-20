import { ButtonBase, Grid } from '@material-ui/core';
import React from 'react';
import './AUStrip.scss';



export default function AUStrip2() {
    return (
        <div className="au-wrapper outsideMargin">
            <div className="au-container TextLeft">
                <div className="au-image AU2"/>
                <div className="au-table LightTeal">
                    <div className="au-text">
                        <h2 className="au-title">We love working with new and local <span className="au-title-shakies Teal">brands!</span></h2>
                        <ButtonBase className="au-cta-button Teal">Email us here</ButtonBase>
                    </div>
                </div>
            </div>
        </div>
    )
}