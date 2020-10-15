import { Card, Grid } from '@material-ui/core'
import React from 'react'
import './MsgFounder.scss';

export default function MsgFounder() {
    return (
        <div className="foundermsg-wrapper">
            <div className="foundermsg-container">
                <Card className="foundermsg-card">
                    <Grid container justify="center" spacing={6}>
                        <Grid className="founder-image" item xs={12} md={4}>
                            <img src="https://dummyimage.com/1080x1920/000/fff" alt="placeholder" />
                        </Grid>
                        <Grid className="founder-message" item xs={12} md={8}>
                            <p className="text">
                                The idea and concept of 5am Lemon came to me in the heart of the first wave of Covid-19. The entire world was socially distancing and keeping their social “bubbles” to immediate family members. We were having cocktail parties on Zoom and Weddings, Graduations, and Proms all had to been cancelled. We were connecting virtually with everyone but the personal “touch and feel” connection was almost non-existent.
                                <br/>
                                <br/> My daughter was graduating from University and I was looking for ways to make her graduation special, since the last 6 weeks of her University life were spent online.  I worked closely with a few of my Marketing Kitchen Colleagues and we designed a personalized graduation gift box that even included images she could perforate off of her and her roommates from her Instagram account.
                                <br/>
                                <br/> The graduation box was a huge success and it showed me that there was a market for this combo greeting card and gift box that could be easily customized with simple and thoughtful words and sentiments. The name ‘5am Lemon” comes from being an early riser and starting each morning with warm lemon water that vitalizes you from within, kick starts your metabolism and is an ideal antioxidant boost.  Each 5am Lemon Box you send will bring energy and joy to both you and your lucky recipient.

                                <br/><span className="signature">Audrey</span><br/>

                                <span className="postscript"> PS – I could never have gotten this off the ground without the patience and talent of my amazing inaugural 5am Lemon Team – Eric, Tony, Mith, Noah, Raman & Joanne.</span>
                            </p>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        </div>
    )
}
