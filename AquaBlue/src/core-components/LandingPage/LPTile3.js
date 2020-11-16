import { ButtonBase, Grid } from '@material-ui/core';
import React from 'react';
import urlGenerator from '$ustoreinternal/services/urlGenerator'
import './LPTile.scss';

import imgTile3 from '../../assets/images/Tile3_Boxes.png';

export default function LPTile3() {
    return (
        <div className="tile-wrapper">
            <div className="tile-container LightRed">
                <div className="mobile-table TextLeft">
                    <div className="tile-image ImgRight Vcenter">
                        <img src={imgTile3} alt="tileImage" />
                    </div>
                    <div className="tile-table">
                        <div className="tile-text">
                            <h2 className="tile-title">Send your <span className="tile-title-shakies Red">bestie</span><br className="break" />a special box that<br className="break" />says <span className="tile-title-shakies Red">i miss you</span></h2>
                            <ButtonBase className="tile-cta-button Red" href={urlGenerator.get({ page: 'Category', id: '53' })}>Friendship Boxes</ButtonBase>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}