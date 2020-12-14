import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import './style.css';

const Intro = () => {
    return (
        <React.Fragment>
            <FadeIn delay={500}>
            <Jumbotron fluid className='header-container'>
                <Container>
                    <p className='about-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Container>
                <Container>
                    <h3>Contact Info:</h3>
                </Container>
            </Jumbotron>
            </FadeIn>
        </React.Fragment>
    )
}

export default Intro;
