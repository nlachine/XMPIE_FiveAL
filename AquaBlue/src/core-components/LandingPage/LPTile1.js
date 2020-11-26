import { ButtonBase, Grid } from '@material-ui/core';
import React from 'react';
import urlGenerator from '$ustoreinternal/services/urlGenerator'
import './LPTile.scss';

import imgTile1 from '../../assets/images/Tile1_Boxes.png';

export default function LPTile1() {
    return (
        <div className="tile-wrapper">
            <div className="tile-container LightTeal">
                <div className="mobile-table TextLeft">
                    <div className="tile-image ImgRight">
                        <img src={imgTile1} alt="tileImage" />
                    </div>
                    <div className="tile-table">
                        <div className="tile-text">
                            <h2 className="tile-title Red">You'll <span className="tile-title-shakies Teal">light up</span><br className="break" /> their holiday<br className="break" /> with a seasonal personalized box</h2>
                            <ButtonBase className="tile-cta-button Teal" href={urlGenerator.get({ page: 'Category', id: '52' })}>Holiday Boxes</ButtonBase>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
