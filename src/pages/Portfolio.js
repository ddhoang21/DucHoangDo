import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import FadeIn from 'react-fade-in';

const Portfolio = () => {
    return (
        <React.Fragment>
            <FadeIn transitionDuration={2000}>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <Card1 />
                        </Col>
                        <Col xs={4}>
                            <Card2 />
                        </Col>
                        <Col xs={4}>
                            <Card3 />
                        </Col>
                    </Row>
                </Container>
            </FadeIn>
        </React.Fragment>
    )
}

export default Portfolio;
