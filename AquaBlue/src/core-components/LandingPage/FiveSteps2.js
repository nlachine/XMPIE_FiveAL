import React from 'react'


import './FiveSteps2.scss';
import img_step1 from '../../assets/images/Design.png';
import img_step2 from '../../assets/images/Personalize.png';
import img_step3 from '../../assets/images/Photos.png';
import img_step4 from '../../assets/images/Gift.png';
import img_step5 from '../../assets/images/Wrap.png';

export default function FiveSteps() {
    return (
        <div className="steps-wrapper">
            <div className="steps-container">
                <h2 className="steps-title">From <span className="steps-title-shakies">design</span> to <span className="steps-title-shakies">doorstep</span> in 5 simple steps</h2>
                <div className="infographics">
                    <div className="steps-infographic">
                        <img src={img_step1} alt="step1" />
                        <h3 className="steps-info-title">Design</h3>
                        <h5 className="steps-info-description">Choose a card and box pattern that fits the occasion</h5>
                    </div>
                    <div className="steps-infographic">
                        <img src={img_step2} alt="step2" />
                        <h3 className="steps-info-title">Personalize</h3>
                        <h5 className="steps-info-description">Write a personalized message on the card</h5>
                    </div>
                    <div className="steps-infographic">
                        <img src={img_step3} alt="step3" />
                        <h3 className="steps-info-title">Photos</h3>
                        <h5 className="steps-info-description">Upload photos on removable flaps</h5>
                    </div>
                    <div className="steps-infographic">
                        <img src={img_step4} alt="step4" />
                        <h3 className="steps-info-title">Select a gift</h3>
                        <h5 className="steps-info-description">Choose the perfect gift(s) to send with the box</h5>
                    </div>
                    <div className="steps-infographic">
                        <img src={img_step5} alt="step5" />
                        <h3 className="steps-info-title">Put a bow on it</h3>
                        <h5 className="steps-info-description">We’ll take it from here and deliver to your special person</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

