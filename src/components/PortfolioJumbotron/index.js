import React from 'react';
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    return (
        <Jumbotron fluid className='portfolio-container'>
            <Container>
                <h1 className='portfolio-title text-center mb-4'>Here are some of my projects</h1>
                <Container className='brand-icons'>
                    <FontAwesomeIcon icon={faHtml5} size='4x' className='html-icon' />
                    <FontAwesomeIcon icon={faCss3Alt} size='4x' className='css-icon' />
                    <FontAwesomeIcon icon={faJsSquare} size='4x' className='js-icon' />
                    <FontAwesomeIcon icon={faReact} size='4x' className='react-icon' />
                    <FontAwesomeIcon icon={faBootstrap} size='4x' className='bootstrap-icon' />
                </Container>
            </Container>
        </Jumbotron>
    )
}

export default Projects;
