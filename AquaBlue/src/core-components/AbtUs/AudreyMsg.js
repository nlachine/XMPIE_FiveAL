import React from 'react';
import './AudreyMsg.scss';
import polaroids from '../../assets/images/AU_Polaroids.png'
 
import polaroidsMobile from '../../assets/images/AU_Polaroids_Mobile.png';

export default function AudreyMsg() {
    return (
        <div className="msg-wrapper">
            <div className="msg-container">
                <div className="msg-text">
                    <h2 className="msg-title">Here's our <span className="shakies Yellow">story</span></h2>
                    <h4 className="msg-message">The idea of 5am Lemon came to me during the first wave of Covid-19.  We were all social distancing and connecting virtually and the personal “touch and feel” connection was almost non-existent. <br /><br />Covid restrictions had cancelled all public gatherings and my daughter's University graduation was also moved online.  With an abrupt end to 4 amazing years away at school, we really wanted to make her graduation day fun.  We plastered our garage doors with humorous posters and created the first ever 5am Lemon box.  The excitement around this box showed me there was a market for this combo greeting card and gift box that could be easily personalized with messages and gifts for any occasion.</h4>
                </div>
                <img className="msg-polaroids" src={polaroids} alt="Polaroids" />
                <img className="msg-polaroids-mobile" src={polaroidsMobile} alt="Polaroids" />
            </div>
        </div>
    )
}
