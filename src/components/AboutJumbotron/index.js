import React from 'react';
import {Container, Jumbotron, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import FadeIn from 'react-fade-in';
import './style.css';

const Intro = () => {
    return (
        <React.Fragment>
            <Jumbotron className='about-container'>
                <Container className='about-section'>
                    <FadeIn delay={100} transitionDuration={1000}>
                        <Container>
                            <h1 className='about-title'>I build responsive web and mobile apps.</h1>
                        </Container>
                    </FadeIn>
                    <FadeIn delay={300} transitionDuration={1000}>
                        <Container>
                            <p className='about-text'>Originally from Belgium, I've lived in Seattle for the past decade where it has now become my home.</p>
                            <p className='about-text'>After spending four years in the tech industry as a consultant, I've decided to change my career and attended a Bootcamp which ignited my passion for front end development.</p>
                            <p className='about-text'>Since then, I've continuously worked on projects to acquire more skills and knowledge in the field. My motivation and dedication is what strives me towards building elegant applications for users.</p>
                            <p className='about-text'>I primarily have expertise in Javascript, specifically React but I'm also proficient in React-Native for iOS/Android mobile applications.</p>   
                        </Container>
                        <br></br>
                    <Button as={Link} className='portfolio-btn shadow-none' variant='link' to='/portfolio'><p className='portfolio-btn-text'><strong>Check out my projects {">"}</strong></p></Button>
                    </FadeIn>
                </Container>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Intro;
