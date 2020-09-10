import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Jumbotron2 from './Jumbotron2';
import TopCategories from './TopCategories';
import SimpleQuote from './SimpleQuote';
import SplitDescriptionLeft from './SplitDescriptionLeft';
import SplitDescriptionRight from './SplitDescriptionRight';
import BoxGif from '../../assets/images/BoxBannerGif.gif';

import BGimg1 from '../../assets/images/randImage1.jpeg';
import BGimg2 from '../../assets/images/randImage2.jpeg';
import BGimg3 from '../../assets/images/randImage3.jpeg';
import InformationImage from './InformationImage';
import SubEmail from './SubEmail';

export default class LandingPage extends Component {
    
    render() {
        return (
            <div className="Landing-Page-Wrapper">
                <Jumbotron2
                    title="GREETING CARD AND BOXES THAT SURPRISE AND DELIGHT"
                    subtitle="A TEXT IS GOOD BUT A PERSONALIZED CARD AND BOX IS BETTER"
                    buttonText="Get Started"
                />
                <TopCategories />
                <SplitDescriptionLeft
                    title="Custom Boxes"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started"
                    image={BGimg1}
                />
                <SplitDescriptionRight
                    title="Custom Boxes"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started"
                    image={BGimg2}
                />
                <SplitDescriptionLeft
                    title="Custom Boxes"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started"
                    image={BGimg3}
                />
                {/* <SimpleQuote
                    quote={<q>This is a quote to fill this space</q>}
                    author="-Noah Lachine"
                /> */}
                <InformationImage 
                    image = {BoxGif}
                />

                <SubEmail />
            </div>
        )
    }
}
