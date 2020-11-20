import React, { Component } from 'react'
import AudreyMsg from './AudreyMsg'
import AUStrip1 from './AUStrip1'
import AUStrip2 from './AUStrip2'
import AUStrip3 from './AUStrip3'
import GetConnectedAU from './GetConnectedAU'
import IGfeed from '../LandingPage/IGfeed';

export default class AboutUsPageFinal extends Component {
    render() {
        return (
            <div className="AboutUs-Page-Main">
                <AudreyMsg />
                <AUStrip1 />
                <AUStrip2 />
                <GetConnectedAU />
                <IGfeed />
            </div>
        )
    }
}
