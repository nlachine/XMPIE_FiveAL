import { ButtonBase, Grid } from '@material-ui/core';
import React from 'react';
import './AUStrip.scss';

import audreySig from '../../assets/images/AudreySigPink.png';


export default function AUStrip0() {
    return (
        <div className="au-wrapper">
            <div className="au-container Story">
                <div className="au-image AU0"/>
                <div className="au-table LightRed">
                    <div className="au-text">

                        <h2 className="au-title">Here is <span className="au-title-shakies Red">our story</span></h2>

                        <h4 className="au-subtitle">In the Spring of 2020 we were social distancing and connecting virtually, the personal “touch and feel” connection was almost non-existent.  You could easily send someone a gift online but good luck trying to pair that with a personalized thoughtful card.   
                        </h4><br/>
                        <h4 className="au-subtitle">
                        The idea of 5am Lemon came to me as I wanted to give people the opportunity to create surprise and delight moments through sending fun gifts in a very personalized way.  The first ever 5am Lemon design was a University Graduation Box I did for my daughter Sarah, the excitement and enthusiasm around the box showed me this thing had legs… and the rest is history.</h4>
                        <img className="msg-audreySig" src={audreySig} alt="Audrey" />

                    </div>
                </div>
            </div>
        </div>
    )
}