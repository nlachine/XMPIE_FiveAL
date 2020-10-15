import { Card } from '@material-ui/core'
import React from 'react'
import "./ThreeCardInfographic.scss";

export default function ThreeCardInfographic(props) {
    return (
        <div className="ThreeCard-wrapper">
            <div className="ThreeCard-container">
                <Card className="card">
                    <img className="icon" src={props.iconOne} />
                    <p className="card-text">{props.textOne}</p>
                </Card>
                <Card className="card">
                    <img className="icon" src={props.iconTwo} />
                    <p className="card-text">{props.textTwo}</p>
                </Card>
                <Card className="card">
                    <img className="icon" src={props.iconThree} />
                    <p className="card-text">{props.textThree}</p>
                </Card>
            </div>
        </div>
    )
}
