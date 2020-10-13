import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Jumbotron2 from './Jumbotron2';
import TopOccasions from '../LandingPage/TopOccasions';
import SplitDescriptionLeft1 from './SplitDescriptionLeft1';
import SplitDescriptionRight1 from './SplitDescriptionRight1';
import SplitDescriptionLeft2 from './SplitDescriptionLeft2';
import SplitDescriptionRight2 from './SplitDescriptionRight2';

import BGimg1 from '../../assets/images/Split_Birthday.png';
import BGimg2 from '../../assets/images/Split_Sympathy.png';
import BGimg3 from '../../assets/images/Split_Valentines.png';

import SubEmail2 from './SubEmail2';

export default class LandingPage extends Component {

    render() {
        return (
            <div className="Landing-Page-Wrapper">
                <Jumbotron2
                    subtitle="Start by choosing your occasion."
                    buttonText="Start Now"
                />
                <TopOccasions />
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
                <SubEmail2 />
            </div>
        )
    }
}
