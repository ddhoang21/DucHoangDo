import React from 'react';
import {Container, Row, Col, Jumbotron, Image, Button} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import './style.css';
import pic from '../../assets/images/me-2.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Intro = () => {
    return (
        <React.Fragment>
            <Jumbotron className='header-container'>
                <Row>
                    <Col xs={3}>
                    <FadeIn delay={500}>
                        <Container className='text-center'>
                            <Image src={pic} className='about-pic'/>
                            <Container className='contact-info'>
                                <p><a style={{color: 'white', textDecoration: 'none'}} href='mailto:dhg.doduchoang@gmail.com'>dhg.doduchoang@gmail.com</a> {' '}<FontAwesomeIcon icon={faEnvelope} size='md'/></p>
                                <p><a style={{color: 'white', textDecoration: 'none'}} href="tel:+1206-669-9740">+1 (206)-669-9740 </a>{' '}<FontAwesomeIcon icon={faPhone} size='md'/></p>
                                <p>Seattle, WA {' '}<FontAwesomeIcon icon={faMapMarkerAlt} size='md'/></p>
                            </Container>
                            <Container className='button-container mt-3'>
                                <Button className='shadow-none' variant='link' href="https://www.linkedin.com/in/duchoangdo/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" className='social-links' active/></Button>
                                <Button className='shadow-none' variant='link' href="https://github.com/ddhoang21" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" className='social-links'/></Button>
                            </Container>
                        </Container>
                    </FadeIn>
                    </Col>
                    <Col xs={9}>
                    <FadeIn delay={500}>
                        <Container>
                            <p className='about-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Container>
                    </FadeIn>
                    </Col>
                </Row>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Intro;
