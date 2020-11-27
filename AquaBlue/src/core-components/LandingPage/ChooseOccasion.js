import React from 'react'
import { ButtonBase } from '@material-ui/core'
import urlGenerator from '$ustoreinternal/services/urlGenerator'
import './ChooseOccasion.scss'



export default function ChooseOccasion() {
    return (
        <div className="occasion-wrapper">
            <div className="occasion-container">
                <h2 className="occasion-title">Choose an <span className="occasion-title-shakies">occasion</span> to start your box</h2>
                <div className="desktopv"><div className="occasion-tiles">
                <ButtonBase href={urlGenerator.get({ page: 'Category', id: '51'})}>
                        <div className="tile-pattern Birthday">
                            <div className="tile-white">
                                <h5 className="tile-title">Birthday</h5>
                            </div>
                        </div>
                    </ButtonBase>
                    <ButtonBase href={urlGenerator.get({ page: 'Category', id: '52'})}>
                        <div className="tile-pattern Holiday">
                            <div className="tile-white">
                                <h5 className="tile-title">Holiday</h5>
                            </div>
                        </div>
                    </ButtonBase>
                    <ButtonBase href={urlGenerator.get({ page: 'Category', id: '53'})}> 
                        <div className="tile-pattern JustBecause">
                            <div className="tile-white">
                                <h5 className="tile-title">Just Because</h5>
                            </div>
                        </div>
                    </ButtonBase>
                    <ButtonBase href={urlGenerator.get({ page: 'Category', id: '54'})}> 
                        <div className="tile-pattern Sympathy">
                            <div className="tile-white">
                                <h5 className="tile-title">Sympathy</h5>
                            </div>
                        </div>
                    </ButtonBase>
                    <ButtonBase href={urlGenerator.get({ page: 'Category', id: '55'})}>
                        <div className="tile-pattern Congrats">
                            <div className="tile-white">
                                <h5 className="tile-title">Congrats</h5>
                            </div>
                        </div>
                    </ButtonBase>
                    <ButtonBase href={urlGenerator.get({ page: 'Category', id: '50'})}>
                        <div className="tile-pattern ThankYou">
                            <div className="tile-white">
                                <h5 className="tile-title">Thank<br />You</h5>
                            </div>
                        </div>
                    </ButtonBase>
                    <ButtonBase href={urlGenerator.get({ page: 'Category', id: '56'})}>
                        <div className="tile-pattern Baby">
                            <div className="tile-white">
                                <h5 className="tile-title">Baby</h5>
                            </div>
                        </div>
                    </ButtonBase>
                </div></div>
                {/* Mobile Version */}
                <div className="mobilev"><div className="occasion-tiles-mobile">
                    <div className="row">
                        <div className="tile-pattern DoubleWide">
                            <h3 className="occ-mobile-title">What's the<br/><span className="shakies">special occasion?</span></h3>
                            <h4 className="occ-mobile-subtitle">Choose one to start</h4>
                        </div>
                        <ButtonBase href={urlGenerator.get({ page: 'Category', id: '51'})}>
                            <div className="tile-pattern Birthday">
                                <div className="tile-white">
                                    <h5 className="tile-title">Birthday</h5>
                                </div>
                            </div>
                        </ButtonBase>
                    </div>
                    <div className="row">
                    <ButtonBase href={urlGenerator.get({ page: 'Category', id: '52'})}>
                            <div className="tile-pattern Holiday">
                                <div className="tile-white">
                                    <h5 className="tile-title">Holiday</h5>
                                </div>
                            </div>
                        </ButtonBase>
                        <ButtonBase href={urlGenerator.get({ page: 'Category', id: '53'})}> 
                            <div className="tile-pattern JustBecause">
                                <div className="tile-white">
                                    <h5 className="tile-title">Just Because</h5>
                                </div>
                            </div>
                        </ButtonBase>
                        <ButtonBase href={urlGenerator.get({ page: 'Category', id: '54'})}> 
                            <div className="tile-pattern Sympathy">
                                <div className="tile-white">
                                    <h5 className="tile-title">Sympathy</h5>
                                </div>
                            </div>
                        </ButtonBase>
                    </div>
                    <div className="row">
                    <ButtonBase href={urlGenerator.get({ page: 'Category', id: '55'})}>
                            <div className="tile-pattern Congrats">
                                <div className="tile-white">
                                    <h5 className="tile-title">Congrats</h5>
                                </div>
                            </div>
                        </ButtonBase>
                        <ButtonBase href={urlGenerator.get({ page: 'Category', id: '50'})}>
                            <div className="tile-pattern ThankYou">
                                <div className="tile-white">
                                    <h5 className="tile-title">Thank<br />You</h5>
                                </div>
                            </div>
                        </ButtonBase>
                        <ButtonBase href={urlGenerator.get({ page: 'Category', id: '56'})}>
                            <div className="tile-pattern Baby">
                                <div className="tile-white">
                                    <h5 className="tile-title">Baby</h5>
                                </div>
                            </div>
                        </ButtonBase>
                    </div>
                </div></div>
            </div>

        </div>
    )
}


