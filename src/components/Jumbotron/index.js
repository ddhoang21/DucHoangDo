import React from 'react';
import {Jumbotron, Container, Button, Image} from 'react-bootstrap';
import Typical from 'react-typical';
import './style.css';
import pic from '../../assets/images/me-2.jpg'; 

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Landing = () => {
    return (
        <React.Fragment>
            <Jumbotron fluid className='header-container'>
                <Container className='header-text text-center'>
                    <Image src={pic} className='profile-pic'/>
                    <h1 className='name'><strong>Duc-Hoang Do</strong></h1>
                    <h5 className='title'><strong>Frontend Web Developer</strong></h5>
                    <p className='text'>
                        <Typical
                            loop={Infinity}
                            // wrapper='b'
                            steps={[
                                "I'm from Seattle", 2000,
                                "I'm a coffee lover", 2000,
                                "I'm a soccer fan", 2000,
                                "I'm an explorer", 2000
                            ]}
                        />
                    </p>
                </Container>
                <Container className='button-container text-center mt-3'>
                    <Button className='shadow-none' variant='link' href="https://www.linkedin.com/in/duchoangdo/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x" className='social-links' active/></Button>
                    <Button className='shadow-none' variant='link' href="https://github.com/ddhoang21" target="_blank"><FontAwesomeIcon icon={faGithub} size="3x" className='social-links'/></Button>
                </Container>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Landing;
