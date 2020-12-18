import React from 'react';
import {Container, Row, Col, Jumbotron, Button, Image} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import './style.css';

import vkbeLogo from '../../assets/images/VKBE/vkbe-logo.png';
import vkbe1 from '../../assets/images/VKBE/vkbe-scrt.png';
import vkbe2 from '../../assets/images/VKBE/vkbe-scrt2.png';

import {Link} from 'react-router-dom';

const Vkbe = () => {
    return (
        <React.Fragment>
            <Jumbotron fluid className='vkbe-project-jumbotron'>
                <FadeIn delay ={100} transitionDuration={1000}>
                    <Container className='vkbe-project-container mt-2'>
                        <Row>
                            <Col xs={6}>
                                <Button as={Link} className='back-btn shadow-none mb-4' variant='link' to='/portfolio' style={{fontSize: '20px'}}>{"<"} Back to projects</Button>
                                <Row className='mt-3'>
                                    <Image src={vkbeLogo} width='120px' height='60px' />
                                    <h1 className='vkbe-project-title ml-3 mt-2'>VKBE Consulting</h1>
                                </Row>
                                <p className='vkbe-project-subtitle mt-4'>VKBE is a technology consulting firm specialized in delivering cloud solutions to our clients.</p>
                            </Col>
                            <Col xs={6}>
                                <Image src={vkbe1} width='90%' height='300px' className='vkbe-project-pic1'/>
                                <Image src={vkbe2} width='90%' height='300px' className='vkbe-project-pic2' />
                            </Col>
                        </Row>
                    </Container>
                </FadeIn>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Vkbe;
