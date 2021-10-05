import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import SubHome from '../SubHome/SubHome';
import SubHomeTwo from '../SubHomeTwo/SubHomeTwo';
import './Home.css'


const Home = () => {
    return (
        // home area start 
        <>
            <div className="backgroundImage">
                <Container>
                    <Row className="d-flex align-items-center pt-5">
                        <div className="col col-md-7">
                            <h1 className="fw-bold text-light">What is  <br /><span className="ieltsSpan">IELTS?</span></h1>
                            <p>IELTS is an English language test for study, migration or work. Over three million people take our test every year. IELTS is accepted by more than 11,000 employers, universities, schools and immigration bodies around the world.</p>
                            <Button variant="primary">Learn Form Today</Button>
                        </div>
                        <div className="col col-md-5 imgHover">
                            <img className="w-100" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>
                    </Row>
                </Container>
            </div>

            {/* sub heading start  */}
            <SubHomeTwo></SubHomeTwo>
            <SubHome></SubHome>
            {/* sub heading end  */}
        </>
        // home area end 
    );
};

export default Home;