import React from 'react';
import { ButtonBase } from '@material-ui/core';
import './GetConnectedAU.scss';

import facebookImg from '../../assets/images/Facebook-Fill.png';
import instaImg from '../../assets/images/Insta-Fill.png';
import tiktokImg from '../../assets/images/TikTok-Fill.png';
import pinterestImg from '../../assets/images/Pinterest-Fill.png';
import twitterImg from '../../assets/images/Twitter-Fill.png';
import youtubeImg from '../../assets/images/Youtube-Fill.png';

export default function GetConnectedAU() {
    return (
        <div className="au-gc-wrapper">
            <div className="gc-container">
                <div className="gc-table">
                    <div className="gc-flexed">
                        <h2 className="gc-title">Let's Get Connected</h2>
                        <div className="gc-icons">
                            <a className="icon" href="https://www.facebook.com/5amlemon"><img src={facebookImg} /></a>
                            <a className="icon" href="https://www.instagram.com/5amlemon/"><img src={instaImg} /></a>
                            <a className="icon" href="https://www.tiktok.com/"><img src={tiktokImg} /></a>
                            <a className="icon" href="https://www.pinterest.ca/5amlemon/_saved/"><img src={pinterestImg} /></a>
                            <a className="icon" href="https://twitter.com/5amlemon"><img src={twitterImg} /></a>
                            <a className="icon" href="https://youtube.com/"><img src={youtubeImg} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
