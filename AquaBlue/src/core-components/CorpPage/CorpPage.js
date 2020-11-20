import React, { Component } from 'react';
import GetConnectedCorp from './GetConnectedCorp';
import CorpStrip1 from './CorpStrip1';
import CorpStrip2 from './CorpStrip2';
import CorpStrip3 from './CorpStrip3';

import IGfeed from '../LandingPage/IGfeed';

export default class CorpPageFinal extends Component {
    
    render() {
        return (
            <div className="Corp-Page-Main">
                <CorpStrip1 />
                <CorpStrip2 />
                <CorpStrip3 />
                <GetConnectedCorp/>
                <IGfeed />
            </div>
        )
    }
}