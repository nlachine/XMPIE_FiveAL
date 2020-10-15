import React from 'react'

import './InfoBar.scss';
export default function InfoBar(props) {
    return (
        <div className="infobar-wrapper">
            <div className="infobar-container">
                <h2 className="info-text">{props.text}</h2>
            </div>
        </div>
    )
}
