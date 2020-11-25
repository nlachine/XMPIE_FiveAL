import { ButtonBase, Grid } from '@material-ui/core';
import React from 'react';
import './AUStrip.scss';



export default function AUStrip1() {
    return (
        <div className="au-wrapper outsideMargin">
            <div className="au-container TextRight">
                <div className="au-image AU1"/>
                <div className="au-table LightYellow">
                    <div className="au-text">
                        <h2 className="au-title"><span className="au-title-shakies Yellow">what's in a name?</span></h2>
                        <h4 className="au-subtitle">5am Lemon refers to being an early riser and starting each day with a glass of warm freshly squeezed lemon water that will boost your immune system and kickstart your metabolism.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}