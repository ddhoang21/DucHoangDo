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
                            <p className='about-text'>I attended a Bootcamp which ignited my passion for frontend web development. Since then, I've continuously worked on projects to build up my skills and knowledge in the field.</p>
                            <p className='about-text'>Creating websites from scratch helped me grow and become a more versatile developer. My motivation and dedication is what strives me towards building elegant applications for users.</p>
                            <p className='about-text'>I primarily have expertise with React but I'm also proficient with React-Native for iOS and Android mobile applications.</p>    
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
