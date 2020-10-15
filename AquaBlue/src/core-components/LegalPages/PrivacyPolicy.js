import { Card } from '@material-ui/core'
import React from 'react'
import './Legal.scss';

export default function PrivacyPolicy() {
    return (
        <div className="terms-wrapper">
            <Card className="content-wrapper">
                <div className="content-container">
                    <h1 className="legal-heading">Privacy Policy</h1>
                    <h2 className="legal-subheading">This is a subheading</h2>
                    <p className="legal-copy">
                        This is the paragraphs of terms. This is the paragraphs of terms. This is the paragraphs of terms. This is the paragraphs of terms. This is the paragraphs of terms. This is the paragraphs of terms.
                    </p>
                </div>
            </Card>
        </div>
    )
}
