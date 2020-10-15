import React from 'react'

import './Infographic.scss';
import ThreeCardInfographic from './ThreeCardInfographic';

export default function Infographic(props) {
    return (
        <div className="infographic-wrapper">
            <div className="infographic-container">
                <ThreeCardInfographic 
                    iconOne = {props.iconOne}
                    textOne = {props.textOne}
                    iconTwo = {props.iconTwo}
                    textTwo = {props.textTwo}
                    iconThree = {props.iconThree}
                    textThree = {props.textThree}
                />
            </div>
        </div>
    )
}
