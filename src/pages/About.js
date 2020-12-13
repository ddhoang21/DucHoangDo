import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FadeIn from 'react-fade-in';

const About = () => {
    return (
        <React.Fragment>
            <FadeIn delay={500}>
                <Container className='justify-content-center'>
                    <p style={{fontSize: '25px'}}>Versatile frontend web developer with experience in building and maintaining responsive web applications. Recognized by peers for strong communication and problem-solving skills. Passionate about React Native and possess a high level of personal initiative to achieve goals and objectives.</p>
                </Container>
                <Container>
                    <Row>
                        <Col xs={6}>
                            <h3>Contact Info:</h3>
                        </Col>
                    </Row>
                </Container>
            </FadeIn>
        </React.Fragment>
    )
}

export default About;
