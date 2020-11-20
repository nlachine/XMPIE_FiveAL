import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        padding: '50px 0px',
        margin: 'auto',
    }, 
    heading: {
        fontSize: theme.typography.pxToRem(15),
        // fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: theme.typography.fontWeightRegular,
    },
    body: {
        // fontFamily: 'Montserrat, Arial, sans-serif',
    },
    '@media (max-width: 600px)': {
        root:{
            width: '90%',
        },
    },
}));


export default function SimpleAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* First */}
            <h1>Shipping Your 5am Lemom Box</h1>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Shipping Policy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.body}>
                    All our 5am Lemon orders are generally shipped from our facility in Markham within 1 to 3 business days from order date. Please expect some delays due to the increase in parcel deliveries over the holidays. Thank you for your patience.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* Second */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Do you ship internationally?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                    Currently, we only ship within Canada using Canada Post shipping services.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* Third */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>How much does shipping cost?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                    Our flat rate delivery for Expedited service is $12, shipped anywhere within Canada. And if you need it there a bit faster, our Express service is $18 shipped anywhere within Canada.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Fourth */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>How long does shipping take?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                From the time we receive and confirm your order, you can expect the gift box to be shipped from our facility within 1-3 business days. Canada Post can deliver to most destinations in Canada within 5-10 business days (please take into account delays due to COVID and higher volumes during Christmas holidays).
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Fifth */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Do you deliver to PO boxes?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                For sure we do! Our boxes can ship anywhere within Canada, just be sure to specify the PO box information on the shipping forms page.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Sixth */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Is there an option for pickup instead of delivery?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                    Unfortunately, at this time picking up your box is not an option.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Seventh */}
                        <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>How do I track my 5am Lemon box?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                Our 5am Lemon boxes are sent using Canada Post Expedited or Express shipping service and an email will be sent to you with a tracking number, so you can follow the gift box all the way to the recipient's mailbox! You'll receive a confirmation email from Canada Post once the gift has been successfully delivered, or be contacted if there are any issues with delivery.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Eight */}
                        <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>What if I need my box delivered on a specific day?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                Unfortunately, we do not offer a specific day delivery option. However, we can provide complementary “Do Not Open Until (your date)” stickers that can be added to your gift box, so that if your gift box arrives early, they will know when to open it (no early peeking!).<br/>

                If you require your gift box to be delivered by a specific date, we encourage you to order early or select the 'Express Shipping' option to ensure it arrives on time.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* Nineth */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>My order hasn't arrived when scheduled, or I have issues with my order.. what do I do?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                Let us help you! Send us an email at hello@5amlemon.com and we will do our best to assist.

                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Tenth */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>What happens if the recipient isn’t home to receive the box?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                Our 5am Lemon boxes are sent using Canada Post Expedited or Express shipping service and sent with Authority to Leave. If no one is home to receive the gift box Canada Post drivers will attempt to leave the package in a safe place by the front door. If there is no safe place to leave the package a slip will be left and the box will be taken to the nearest Canada Post outlet for pickup.

                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Eleventh */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Can I request a delivery time?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                Unfortunately, we are unable to guarantee a specific delivery time, all our 5am Lemon boxes are delivered between 9am - 5pm.

                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Twelveth */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>What happens if my 5am Lemon box needs to be redelivered?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                For 5am Lemon boxes sent using Canada Post Expedited or Express shipping service, if the wrong shipping address is provided or the gift box is not collected from the Canada Post outlet within 5 business days you will be required to pay a $10 redelivery fee to have the gift box redelivered.

                    </Typography>
                </AccordionDetails>
            </Accordion>

            <br/>
            <h1>Return Policy</h1>

            {/* 1 */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>What is your return policy?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                Due to the personalized nature of our 5am Lemon boxes, all sales are final and non-refundable. But we are so certain they are going to love it!

                If there are any issues with your gift upon arrival, please do let us know within 24 hours. We take every effort to ensure your 5am Lemon box arrives looking amazing!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* 2 */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Can I return a gift box or an item from a gift box?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                Unfortunately, we do not accept returns on 5am Lemon boxes or on gifts within the boxes. However, if anything inside the box has arrived damaged, please email us at hello@5amlemon.com and we will make it right.

                    </Typography>
                </AccordionDetails>
            </Accordion>  

            <br/>
            <h1>Your 5am Lemom Box</h1>

            {/* 1 */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>What will my 5am Lemon box look like when it arrives?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                Your 5am Lemon gifts will be presented in a 4 x 4 x 6 custom printed matte white box. Each box is sealed with a 7/8" grosgrain ribbon to match the box pattern, with a bow on top. This box is secured inside our 100% recycled shipping boxes. We pride ourselves on the unboxing experience from start to finish. You can be sure your gift box will look amazing when it arrives at their front door and they will be so happy when they discover the awesome gifts inside. Our packaging is also eco-friendly and can be reused or 100% recycled.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* 2 */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Will you be offering more box designs?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                Yes, we will be adding new designs for every main holiday and for occasions in between. Do you have an idea that you'd like to see on our website? Send us a note at hello@5amlemon.com.

                    </Typography>
                </AccordionDetails>
                </Accordion>            

                <br/>
            <h1>Ordering Your 5am Lemom Box</h1>

            {/* 1 */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>What payments do you accept?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                We accept PayPal at this time. You do not have an existing PayPal account, simply click the PayPal button and you will be directed to input a credit card number if that is your preferred method of payment.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* 2 */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>I’m having problems placing an order. What do I do?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                If you are having trouble at any stage of the process, we are happy to help! Email us at hello@5amlemon.com and leave us a number where we can reach you. We will get back to you as quick as we can.

                    </Typography>
                </AccordionDetails>
                </Accordion>   

            {/* 3 */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>I want to order multiple boxes that will be shipped to multiple addresses but your website only allows one address per order. How can I do this? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                There are two options, you can either (1) place a separate order for each recipient, or (2) email us the details of your multiple piece order and we will send you an invoice to pay for all of the gifts in one transaction. Email us your multiple box order at hello@5amlemon.com and we will gladly assist you with your order.

                    </Typography>
                </AccordionDetails>
                </Accordion>  

            {/* 4 */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>How can I place a corporate order for an order larger than 25 boxes? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.body}>
                For corporate orders, please email us at hello@5amlemon.com and we would love to discuss your gift giving requirements.

                    </Typography>
                </AccordionDetails>
                </Accordion>   
        </div>
    );
}