import React, { Component } from 'react';

import FiveSteps2 from './FiveSteps2';
import ChooseOccasion from './ChooseOccasion';
import HeroBanner from './HeroBanner';

import LPTile1 from './LPTile1';
import LPTile2 from './LPTile2';
import LPTile3 from './LPTile3';

import SubEmail2 from './SubEmail2';
import IGfeed from './IGfeed';
import GetConnectedCorp from './GetConnectedCorp';

export default class LandingPage extends Component {

    render() {
        return (
            <div className="Landing-Page-Main">
                <HeroBanner />
                <FiveSteps2 />
                <ChooseOccasion />
                <LPTile1 />
                <LPTile2 />
                <LPTile3 />
                <SubEmail2 />
                <GetConnectedCorp />
                <IGfeed />
            </div>
        )
    }
}
