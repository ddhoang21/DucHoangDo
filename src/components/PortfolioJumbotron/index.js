import React from 'react';
import {Container, Col, Row, Jumbotron, Button, Image} from 'react-bootstrap';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';

import vkbeLogo from '../../assets/images/VKBE/vkbe-logo.png';
import vkbe1 from '../../assets/images/VKBE/vkbe-scrt.png';
import rinqydink from '../../assets/images/Rinqydink/rinqydink1.png';

const Projects = () => {
    return (
        <React.Fragment>
            <Jumbotron fluid className='portfolio-container'>
                <Container>
                    <h1 className='portfolio-title text-center mb-4'>Some web and mobile applications</h1>
                    <Container className='brand-icons mt-5'>
                        <FontAwesomeIcon icon={faHtml5} size='4x' className='html-icon' />
                        <FontAwesomeIcon icon={faCss3Alt} size='4x' className='css-icon' />
                        <FontAwesomeIcon icon={faJsSquare} size='4x' className='js-icon' />
                        <FontAwesomeIcon icon={faReact} size='4x' className='react-icon' />
                        <FontAwesomeIcon icon={faBootstrap} size='4x' className='bootstrap-icon' />
                    </Container>
                    <p className='portfolio-subtitle text-center mt-5'>More projects coming soon...</p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className='vkbe-jumbotron mb-0'>
                <Container className='text-center'>
                    <Image src={vkbeLogo} width='150px' height='70px' />
                    <Button className='vkbe-btn shadow-none mt-3' variant='link' href='/portfolio/vkbe'><Image src={vkbe1} className='vkbe-pic1'/></Button>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className='rinqydink-jumbotron mb-0'>
                <Container className='text-center'>
                    <h1>Rinqydink</h1>
                    <Button className='vkbe-btn shadow-none mt-3' variant='link' href='/portfolio/rinqydink'><Image src={rinqydink} className='vkbe-pic1'/></Button>
                </Container>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Projects;
