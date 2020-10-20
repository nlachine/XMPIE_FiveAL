import React, { Component } from 'react';
import './CorporatePage.scss';
import FindSolutions from './FindSolutions';
import Infographic from './Infographic';
import AltDescriptionPhotoRight from './AltDescriptionPhotoRight';
import AltDescriptionPhotoLeft from './AltDescriptionPhotoLeft';
import InfoBar from './InfoBar';
import CorpInquiry from './CorpInquiry';
import TilesCorp1 from './TilesCorp1';

// https://dummyimage.com/1920x1080/000/fff
export default class BoxDesignsPage extends Component {

    render() {
        return (
            <div className="corporate-page-wrapper">
                {/* <Infographic
                    iconOne="https://www.flaticon.com/svg/static/icons/svg/2301/2301129.svg"
                    textOne="Minimum order quantity of 25 units."
                    iconTwo="https://www.flaticon.com/svg/static/icons/svg/2301/2301129.svg"
                    textTwo="Completely customize the box and contents."
                    iconThree="https://www.flaticon.com/svg/static/icons/svg/2301/2301129.svg"
                    textThree="Each box can be personalized for each recipient."
                /> */}
                <TilesCorp1 />
                <FindSolutions />
                <div className="alt-photos-div">
                    <AltDescriptionPhotoRight
                        title="Show you care"
                        description="Let us help you surprise and delight employees, clients and prospects."
                        image="https://dummyimage.com/1920x1080/000/fff"
                    />
                    <AltDescriptionPhotoLeft
                        title="Welcome Packages"
                        description="Perhaps you are hosting a virtual conference and would like to send out a customized welcome package to each attendee."
                        image="https://dummyimage.com/1920x1080/000/fff"
                    />
                </div>
                <InfoBar 
                    text="No matter what the occasion let a 5am Lemon box show people they are special."
                />
                <CorpInquiry />
            </div>
        )
    }
}
