import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Skills from '../components/List';

const Resume = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6}>
                        <h1>Resume</h1>
                    </Col>
                    <Col xs={6}>
                        <Skills />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Resume;
