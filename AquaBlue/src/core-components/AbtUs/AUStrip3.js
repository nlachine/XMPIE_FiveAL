import { ButtonBase, Grid } from '@material-ui/core';
import React from 'react';
import './AUStrip.scss';



export default function AUStrip3() {
    return (
        <div className="au-wrapper outsideMargin">
            <div className="au-container TextRight">
                <div className="au-image AU2"/>
                <div className="au-table LightYellow">
                    <div className="au-text">
                        <h2 className="au-title Teal"><span className="au-title-shakies Yellow">surprise</span> virtual conference Attendees</h2>
                        <h4 className="au-subtitle">Create a custom box that gets attendees excited, provides conference details, an executive welcome message and healthy snacks to fuel their day.</h4>
                        <ButtonBase className="au-cta-button Teal">Let us help</ButtonBase>
                    </div>
                </div>
            </div>
        </div>
    )
}