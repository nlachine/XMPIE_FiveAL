import { ButtonBase, Grid } from '@material-ui/core';
import React from 'react';
import './CorpStrip.scss';



export default function CorpStrip3() {
    return (
        <div className="strip-wrapper outsideMargin">
            <div className="strip-container TextLeft">
                <div className="strip-image Corp3"/>
                <div className="strip-table LightRed">
                    <div className="strip-text">
                        <h2 className="strip-title"><span className="strip-title-shakies Red">don’t forget</span> the real vips in your company</h2>
                        <h4 className="strip-subtitle">They have adapted, bended and molded their everyday routines. Recognize your employees with a surprise box delivered to their home and remind them how much they are appreciated and valued.</h4>
                        <ButtonBase className="strip-cta-button Red">Let us help</ButtonBase>
                    </div>
                </div>
            </div>
        </div>
    )
}