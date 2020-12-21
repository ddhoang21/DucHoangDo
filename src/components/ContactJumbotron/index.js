import React from 'react';
import {Jumbotron, Row, Col, Container, Button, Image} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import './style.css';
import pic from '../../assets/images/me-2.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
    return (
        <React.Fragment>
            <Jumbotron className='contact-container'>
                <FadeIn delay ={100} transitionDuration={1000}>
                    <Container className='contact-section'>
                    <h1 className='contact-title text-center'>Let's talk.</h1>
                        <Container className='text-center'>
                            <Image src={pic} className='contact-pic'/>
                            <Container className='contact-info'>
                                <p><a style={{color: 'white', textDecoration: 'none'}} href='mailto:dhg.doduchoang@gmail.com'>dhg.doduchoang@gmail.com</a> {' '}<FontAwesomeIcon icon={faEnvelope} size='md'/></p>
                                <p>+1 (206)-669-9740 {' '}<FontAwesomeIcon icon={faPhone} size='md'/></p>
                                <p>Seattle, WA {' '}<FontAwesomeIcon icon={faMapMarkerAlt} size='md'/></p>
                            </Container>
                            <Container className='mt-3'>
                                <Button className='shadow-none' variant='link' href='https://www.linkedin.com/in/duchoangdo/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size='3x' className='social-links' active/></Button>
                                <Button className='shadow-none' variant='link' href='https://github.com/ddhoang21' target='_blank'><FontAwesomeIcon icon={faGithub} size='3x' className='social-links'/></Button>
                            </Container>
                        </Container>
                    </Container>
                    <p className='contact-text text-center mt-5'>Get in touch via email or schedule a<Button className='talk-btn shadow-none' variant='link' href='https://calendly.com/duchoang' target='_blank' style={{fontSize: '20px'}}>consultation</Button></p>
                </FadeIn>
            </Jumbotron>
        </React.Fragment>
    )
}

export default ContactMe;
