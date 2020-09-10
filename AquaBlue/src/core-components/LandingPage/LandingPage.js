import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Jumbotron2 from './Jumbotron2';
import TopCategories from './TopCategories';
import SimpleQuote from './SimpleQuote';
import SplitDescriptionLeft1 from './SplitDescriptionLeft1';
import SplitDescriptionRight1 from './SplitDescriptionRight1';
import SplitDescriptionLeft2 from './SplitDescriptionLeft2';
import SplitDescriptionRight2 from './SplitDescriptionRight2';
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
                    subtitle="Start by choosing your occasion."
                    buttonText="Get Started"
                />
                <TopCategories />
                <SplitDescriptionRight1
                    title="Celebrate their favourite day of the year."
                    subtitle=""
                    buttonText="Start Here"
                    image={BGimg2}
                />
                <SplitDescriptionLeft1
                    title="Help them get through this rough patch."
                    subtitle=""
                    buttonText="Sympathy Cards"
                    image={BGimg1}
                />
                <SplitDescriptionRight2
                    title="Make this valentine's day one to remember."
                    subtitle=""
                    buttonText="For Her"
                    image={BGimg2}
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
