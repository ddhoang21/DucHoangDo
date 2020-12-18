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
            <Jumbotron className='about-container'>
                <Row>
                    <Col xs={3}>
                        <FadeIn delay ={100} transitionDuration={1000}>
                        <Container className='text-center'>
                            <Image src={pic} className='about-pic'/>
                            <Container className='contact-info'>
                                <p><a style={{color: 'white', textDecoration: 'none'}} href='mailto:dhg.doduchoang@gmail.com'>dhg.doduchoang@gmail.com</a> {' '}<FontAwesomeIcon icon={faEnvelope} size='md'/></p>
                                <p><a style={{color: 'white', textDecoration: 'none'}} href='tel:+1206-669-9740'>+1 (206)-669-9740 </a>{' '}<FontAwesomeIcon icon={faPhone} size='md'/></p>
                                <p>Seattle, WA {' '}<FontAwesomeIcon icon={faMapMarkerAlt} size='md'/></p>
                            </Container>
                            <Container className='button-container mt-3'>
                                <Button className='shadow-none' variant='link' href='https://www.linkedin.com/in/duchoangdo/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x' className='social-links' active/></Button>
                                <Button className='shadow-none' variant='link' href='https://github.com/ddhoang21' target='_blank'><FontAwesomeIcon icon={faGithub} size='2x' className='social-links'/></Button>
                            </Container>
                        </Container>
                        </FadeIn>
                    </Col>
                    <Col xs={9}>
                        <Container className='about-section'>
                            <FadeIn delay={100} transitionDuration={1000}>
                                <Container>
                                    <h1 className='about-title'>I build responsive web apps.</h1>
                                </Container>
                            </FadeIn>
                            <FadeIn delay={300} transitionDuration={1000}>
                                <Container>
                                    <p className='about-text'>Originally from Belgium, I've lived in Seattle for the past decade where it has now become my home.</p>
                                    <p className='about-text'>I attended a Bootcamp which ignited my passion for frontend web development. Since then, I've continuously worked on projects to build up my skills and knowledge in the field.</p>
                                    <p className='about-text'>Creating websites from scratch helped me become a more versatile developer. My motivation and dedication is what strives me to build elegant applications for users.</p>
                                    <p className='about-text'>I primarily have expertise with React but I'm also proficient with React-Native for iOS and Android mobile applications.</p>
                                    <br></br>      
                                    <p className='about-text'>Interested in working with me?<Button className='talk-btn shadow-none' variant='link' href='https://calendly.com/duchoang' target='_blank' style={{fontSize: '20px'}}>Let's talk.</Button></p>
                                </Container>
                            </FadeIn>
                            {/* <FadeIn delay={700} transitionDuration={1000}>
                                <Container className='about-quote'>
                                    <p>“Live as if you were to die tomorrow. Learn as if you were to live forever.” {' '}- Mahatma Gandhi</p>
                                </Container>
                            </FadeIn> */}
                        </Container>
                    </Col>
                </Row>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Intro;
