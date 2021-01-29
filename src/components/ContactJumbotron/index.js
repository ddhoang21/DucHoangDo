import React from 'react';
import {Jumbotron, Container, Button, Image} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import './style.css';
import pic from '../../assets/images/me-3.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
    return (
        <React.Fragment>
            <Jumbotron className='contact-container'>
                <FadeIn delay ={100} transitionDuration={1000}>
                    <Container className='contact-section'>
                        <Container className='text-center'>
                            <Image src={pic} className='contact-pic'/>
                            <Container className='contact-info'>
                                <p><a style={{color: 'white', textDecoration: 'none'}} href='mailto:dhg.doduchoang@gmail.com'>dhg.doduchoang@gmail.com</a> {' '}<FontAwesomeIcon icon={faEnvelope} size='md'/></p>
                                <p>+1 (206)-669-9740 {' '}<FontAwesomeIcon icon={faPhone} size='md'/></p>
                                <p>Seattle, WA {' '}<FontAwesomeIcon icon={faMapMarkerAlt} size='md'/></p>
                            </Container>
                            <Container className='mt-3'>
                                <Button className='shadow-none' variant='link' href='https://www.linkedin.com/in/duchoangdo/' target='_blank'><FontAwesomeIcon icon={faLinkedin} className='social-links' active/></Button>
                                <Button className='shadow-none' variant='link' href='https://github.com/ddhoang21' target='_blank'><FontAwesomeIcon icon={faGithub} className='social-links'/></Button>
                            </Container>
                        </Container>
                    </Container>
                </FadeIn>
            </Jumbotron>
        </React.Fragment>
    )
}

export default ContactMe;
