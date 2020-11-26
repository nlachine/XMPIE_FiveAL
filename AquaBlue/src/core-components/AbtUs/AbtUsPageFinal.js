import React, { Component } from 'react'
import AudreyMsg from './AudreyMsg'
import AUStrip1 from './AUStrip1'
import AUStrip2 from './AUStrip2'
import AUStrip0 from './AUStrip0'
import GetConnected from '../LandingPage/GetConnectedCorp'
import IGfeed from '../LandingPage/IGfeed';

export default class AboutUsPageFinal extends Component {
    render() {
        return (
            <div className="AboutUs-Page-Main">
                <AUStrip0 />
                <AUStrip1 />
                <AUStrip2 />
                <GetConnected />
                <IGfeed />
            </div>
        )
    }
}
