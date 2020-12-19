import React from 'react';
import {Container, Col, Row, Jumbotron, Button, Image} from 'react-bootstrap';
import './style.css';

import vkbeLogo from '../../assets/images/VKBE/vkbe-logo.png';
import vkbe1 from '../../assets/images/VKBE/vkbe-scrt.png';
import vkbe2 from '../../assets/images/VKBE/vkbe-scrt2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';

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
            <Jumbotron fluid className='vkbe-jumbotron'>
                <Container className='vkbe-container mt-4'>
                    <Row>
                        <Col xs={5}>
                            <Row>
                                <Image src={vkbeLogo} width='100px' height='50px' />
                                <h3 className='vkbe-title ml-3 mt-2'>VKBE Consulting</h3>
                            </Row>
                            <Button className='vkbe-btn shadow-none mt-3' variant='link' href='/portfolio/vkbe' style={{fontSize: '20px'}}>Learn More {">"}</Button>
                        </Col>
                        <Col xs={7}>
                            <Image src={vkbe1} className='vkbe-pic1'/>
                            <Image src={vkbe2} className='vkbe-pic2' />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Projects;
