import { Grid } from '@material-ui/core';
import React from 'react';
import './AltDescriptionPhotoRight.scss';

export default function AltDescriptionPhotoRight(props) {
    return (
        <div className="Altphoto-wrapper-right">
            <div className="altphoto-container">
                <div className="description-holder">
                    <span>
                        <h4 className="description-title">{props.title}</h4>
                        <p className="description-p">{props.description}</p>
                    </span>
                </div>
                <div className="photo-holder">
                    <img src={props.image} alt="placeholder" />
                </div>
            </div>
        </div>
    )
}
