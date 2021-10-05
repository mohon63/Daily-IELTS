import React from 'react';
import { Accordion, Container, Nav } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <>
            {/* about page heading start */}

            <div className="aboutBackdround">
                <h1 className="mb-1 text-light text-center pt-5 fw-bold"><span style={{ fontSize: '5rem' }}>Daily Ielts</span></h1>
            </div>

            {/* about page heading end */}

            <Container className="text-center">
                <h1 className="mb-3">About Us</h1>
                <ul>
                    <li>Goal</li>
                    <li>Achievement</li>
                    <li>Location</li>
                    <li>Contact</li>
                </ul>


                {/* Accordion from react bootstrap components start */}

                <Accordion className="my-5" defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Goal</Accordion.Header>
                        <Accordion.Body>
                            The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language. This includes countries such as Australia, Canada, New Zealand, the UK and USA.                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Achievement</Accordion.Header>
                        <Accordion.Body>If you are looking to work, live or study in an English-speaking country, then you must be able to demonstrate a high level of English language ability.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Location</Accordion.Header>
                        <Accordion.Body>Details from Google Maps <br />
                            KN 5 Rd, Kigali, Rwanda <br />
                            +250 724 123 139
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* Accordion from react bootstrap components end */}

            </Container>
        </>
    );
};

export default About;