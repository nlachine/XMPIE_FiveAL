import { ButtonBase, Grid } from '@material-ui/core';
import React from 'react';
import urlGenerator from '$ustoreinternal/services/urlGenerator'
import './LPTile.scss';

import imgTile2 from '../../assets/images/Tile2_Boxes.png';

export default function LPTile2() {
    return (
        <div className="tile-wrapper">
            <div className="tile-container LightYellow">
                <div className="mobile-table TextRight">
                    <div className="tile-image ImgLeft">
                        <img src={imgTile2} alt="tileImage ImgLeft" />
                    </div>
                    <div className="tile-table">
                        <div className="tile-text">
                            <h2 className="tile-title Teal">Celebrate <span className="tile-title-shakies Yellow">birthdays</span> by sending the most <span className="tile-title-shakies Yellow">thoughtful</span> gift ever!</h2>
                            <ButtonBase className="tile-cta-button Teal" href={urlGenerator.get({ page: 'Category', id: '51' })}>Birthday Boxes</ButtonBase>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
