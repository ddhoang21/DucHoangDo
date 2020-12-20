import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
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
                            <p className='about-text'>Creating websites from scratch helped me grow and become a more versatile developer. My motivation and dedication is what strives me to build elegant applications for users.</p>
                            <p className='about-text'>I primarily have expertise with React but I'm also proficient with React-Native for iOS and Android mobile applications.</p>    
                        </Container>
                    </FadeIn>
                </Container>
                <FadeIn delay={700} transitionDuration={1000}>
                    <Container className='about-quote'>
                        <p>“Live as if you were to die tomorrow. Learn as if you were to live forever.” {' '}- Mahatma Gandhi</p>
                    </Container>
                </FadeIn>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Intro;
