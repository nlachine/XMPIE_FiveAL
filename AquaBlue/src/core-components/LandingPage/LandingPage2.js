import React, { Component } from 'react';
import Jumbotron2b from './Jumbotron2b';
import SplitDescriptionLeft1 from './SplitDescriptionLeft1';
import SplitDescriptionRight1 from './SplitDescriptionRight1';
import SplitDescriptionLeft2 from './SplitDescriptionLeft2';
import SplitDescriptionRight2 from './SplitDescriptionRight2';
import BoxGif from '../../assets/images/BoxBannerGif.gif';

import BGimg1 from '../../assets/images/Split_Birthday.png';
import BGimg2 from '../../assets/images/Split_Sympathy.png';
import BGimg3 from '../../assets/images/Split_Valentines.png';
import InformationImage from './InformationImage';
import SubEmail from './SubEmail';
import FiveSteps from './FiveSteps';

export default class LandingPage extends Component {

    render() {
        return (
            <div className="Landing-Page-Wrapper">
                <Jumbotron2b
                    subtitle="Start by choosing your occasion."
                    buttonText="Get Started"
                />
                <div style={{padding: "20px 0px"}}/>
                <FiveSteps />
                <div style={{padding: "20px 0px"}}/>
                {/* <TopCategories /> */}
                <SplitDescriptionRight1
                    title="Celebrate their favourite day of the year."
                    subtitle=""
                    buttonText="Start Here"
                    image={BGimg1}
                />
                <SplitDescriptionLeft1
                    title="Help them get through this rough patch."
                    subtitle=""
                    buttonText="Sympathy Cards"
                    image={BGimg2}
                />
                <SplitDescriptionRight2
                    title="Make this valentine's day one to remember."
                    subtitle=""
                    buttonText="For Her"
                    image={BGimg3}
                />
                {/* <SplitDescriptionLeft2
                    title="Custom Boxes"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started"
                    image={BGimg3}
                /> */}
                {/* <SimpleQuote
                    quote={<q>This is a quote to fill this space</q>}
                    author="-Noah Lachine"
                /> */}
                <InformationImage
                    image={BoxGif}
                />
                <SubEmail />
            </div>
        )
    }
}
