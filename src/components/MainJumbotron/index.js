import React from 'react';
import {Jumbotron, Container, Button, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Typical from 'react-typical';
import './style.css';
import pic from '../../assets/images/me-3.jpg';
import FadeIn from 'react-fade-in';

const Landing = () => {
    return (
        <React.Fragment>
            <Jumbotron fluid className='main-container'>
                <FadeIn delay ={100} transitionDuration={1000}>
                    <Container className='header-text text-center'>
                        <Image src={pic} className='main-pic'/>
                        <h1 className='name'><strong>Duc-Hoang Do</strong></h1>
                        <h5 className='title'><strong>Jr. Front End Developer</strong></h5>
                        <p className='text'>
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "I'm a coffee lover", 2000,
                                    "I'm a soccer fan", 2000,
                                    "I'm a music enthusiast", 2000,
                                    "I'm an explorer", 2000
                                ]}
                            />
                        </p>
                    </Container>
                    <Container className='text-center'>
                        <Button as={Link} className='more-btn shadow-none' variant='link' to='/about'><p className='more-btn-text'><strong>Learn More {">"}</strong></p></Button>
                    </Container>
                </FadeIn>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Landing;
