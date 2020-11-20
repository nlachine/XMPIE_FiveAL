import { ButtonBase, Grid } from '@material-ui/core';
import React from 'react';
import './CorpStrip.scss';



export default function CorpStrip2() {
    return (
        <div className="strip-wrapper outsideMargin">
            <div className="strip-container TextRight">
                <div className="strip-image Corp2"/>
                <div className="strip-table LightYellow">
                    <div className="strip-text">
                        <h2 className="strip-title Teal"><span className="strip-title-shakies Yellow">surprise</span> virtual conference Attendees</h2>
                        <h4 className="strip-subtitle">Create a custom box that gets attendees excited, provides conference details, an executive welcome message and healthy snacks to fuel their day.</h4>
                        <ButtonBase className="strip-cta-button Teal">Let us help</ButtonBase>
                    </div>
                </div>
            </div>
        </div>
    )
}