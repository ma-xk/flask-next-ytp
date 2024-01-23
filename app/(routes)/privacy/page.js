'use client';

import React from 'react';
import { Container, Row, Col } from 'react-grid-system';


function Privacy () {


    return (
        <div>
            <Container>
                {/* <Spacer /> */}
                <Row justify="center">
                    <Col xs={12} md={10}>
                        <h1>Privacy</h1>
                        <h2>Information Collection, Use, and Sharing</h2>
    <p>We are the sole owners of the information collected on this site. We will not sell or rent this information to anyone.</p>
    <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request.</p>
    <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services or changes to this privacy policy.</p>

    <h2>Your Access to and Control Over Information</h2>
    <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:</p>
    <ul>
        <li>See what data we have about you, if any.</li>
        <li>Change/correct any data we have about you.</li>
        <li>Have us delete any data we have about you.</li>
        <li>Express any concern you have about our use of your data.</li>
    </ul>

    <h2>Security</h2>
    <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected online and offline.</p>

    <h2>Updates</h2>
    <p>Our Privacy Policy may change from time to time and all updates will be posted on this page.</p>

    <h2>Contact Information</h2>
    <p>If you feel that we are not abiding by this privacy policy, you should contact us immediately:</p>
    <ul>
        <li>via telephone at 1-866-903-0907</li>
        <li>or email at <a href="mailto:info@yourtrainingprovider.com">info@yourtrainingprovider.com</a></li>
    </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Privacy;
