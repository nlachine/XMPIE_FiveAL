import { Card, TextField } from '@material-ui/core';
import React from 'react'

import './CorpInquiry.scss';
import Email from './Form';

export default function CorpInquiry() {
    return (
        <div className="inquiry-wrapper">
            <div className="inquiry-container">
                <Card className="inquiry-card">
                    <div className="inquiry-title">
                        <h2 className="inquiry-title-text">Send an Inquiry</h2>
                    </div>
                    <div className="inquiry-container-form">
                        <Email></Email>
                    </div>
                </Card>
            </div>
        </div>
    )
}
