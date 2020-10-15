import { Grid } from '@material-ui/core';
import React from 'react';
import './AltDescriptionPhotoLeft.scss';

export default function AltDescriptionPhotoLeft(props) {
    return (
        <div className="Altphoto-wrapper-left">
            <div className="altphoto-container">
                <div className="photo-holder">
                    <img src={props.image} alt="placeholder" />
                </div>
                <div className="description-holder">
                    <h4 className="description-title">{props.title}</h4>
                    <p className="description-p">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
