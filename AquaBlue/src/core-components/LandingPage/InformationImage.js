import React from 'react';
import './InformationImage.scss';

export default function InformationImage(props) {
    return (
        <div className="information-image-wrapper">
            <img className="information-image" src={props.image} alt="Box Steps"/>
        </div>
    )
}
