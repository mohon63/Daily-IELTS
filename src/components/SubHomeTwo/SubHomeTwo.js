import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './SubHomeTwo.css'


const SubHomeTwo = () => {
    return (
        <div className="text-center">
            <h1 className=" py-3">How we care about learner</h1>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {/* single card start  */}
                    <Col>
                        <div className="carD border border-primary shadow p-3 mb-5 bg-body rounded" >
                            <Card.Body>
                                <Card.Title>IELTS for work</Card.Title>
                                <Card.Text>
                                    Organisations around the world rely on IELTS to help them select the right people.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="carD border border-primary shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>
                                <Card.Title>IELTS for migration</Card.Title>
                                <Card.Text>
                                    Take IELTS to migrate to Australia fhgdj fdhdg eev, Canada, New Zealand and the UK.                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="carD border border-primary shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>
                                <Card.Title>IELTS for study</Card.Title>
                                <Card.Text>
                                    IELTS is recognised by more than 11,000 education and training providers worldwide.                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="carD border border-primary shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>
                                <Card.Title>Exam and test</Card.Title>
                                <Card.Text>
                                    In the last stage we judge,have some fdhj asrt hgyh attractive prize and certificates.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Col>
                    {/* single card end  */}
                </Row>
            </Container>
        </div>
    );
};

export default SubHomeTwo;