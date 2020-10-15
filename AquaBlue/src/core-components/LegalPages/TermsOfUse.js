import { Card, Typography } from '@material-ui/core'
import React from 'react'
import './Legal.scss';

export default function TermsOfUse() {
    return (
        <div className="terms-wrapper">
            <Card className="content-wrapper">
                <div className="content-container">
                    <h1 className="legal-heading">Terms</h1>
                    <h2 className="legal-subheading">This is a subheading</h2>
                    <p className="legal-copy">
                        This is the paragraphs of terms. This is the paragraphs of terms. This is the paragraphs of terms. This is the paragraphs of terms. This is the paragraphs of terms. This is the paragraphs of terms.
                    </p>
                </div>
            </Card>
        </div>
    )
}
