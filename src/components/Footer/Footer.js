import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (

        // footer start 
        <div className="bg-custom text-light text-center pt-5 cusFooter">
            <Container className="footerGrid">
                <div>
                    <h3 className="text-start">Use full links</h3>
                    <ul className="d-block p-0 m-0">
                        <li>Join course now</li>
                        <li>See more details</li>
                        <li>Contact us</li>
                        <li>Visit us</li>
                        <li>Our location</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-start">Our Plan</h3>
                    <ul className="d-block p-0 m-0">
                        <li>Ways to take IELTS</li>
                        <li>IELTS on computer</li>
                        <li>IELTS for migration</li>
                        <li>IELTS for study</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-start">Certification</h3>
                    <ul className="d-block p-0 m-0">
                        <li>How IELTS is scored</li>
                        <li>IELTS Complaints Policy</li>
                        <li>IELTS Results Service</li>
                        <li>How to use IELTS results</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-start">Course details</h3>
                    <ul className="d-block p-0 m-0">
                        <li>Duration - 3 months</li>
                        <li>Course fee - no</li>
                        <li>Course exams - yes</li>
                        <li></li>
                    </ul>
                </div>
            </Container>
            <p className="p-0 m-0">allrights reserved by mohon</p>
        </div>

        // footer end 
    );
};

export default Footer;