import React from 'react';
import {Container, Jumbotron, Button, Image} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import './style.css';

import vkbeLogo from '../../assets/images/VKBE/vkbe-logo.png';
import vkbe1 from '../../assets/images/VKBE/vkbe-scrt.png';
import vkbe2 from '../../assets/images/VKBE/vkbe-scrt2.png';
import vkbe3 from '../../assets/images/VKBE/vkbe-scrt3.png';
import vkbe4 from '../../assets/images/VKBE/vkbe-scrt4.png';

import {Link} from 'react-router-dom';

const Vkbe = () => {
    return (
        <React.Fragment>
            <Jumbotron fluid className='vkbe-project-jumbotron'>
                <FadeIn delay ={100} transitionDuration={1000}>
                    <Button as={Link} className='back-btn shadow-none mt-4 ml-5' variant='link' to='/portfolio' style={{fontSize: '20px'}}>{"<"} Back to projects</Button>
                    <Container className='vkbe-project-container mt-4'>
                        <Container className='text-center'>
                            <Image src={vkbeLogo} width='250px' height='100px' className='vkbe-project-logo'/>
                            <h1 className='vkbe-project-title mt-4'>VKBE Consulting</h1>
                            <p className='vkbe-project-subtitle mt-4'>A technology consulting firm specialized in delivering cloud solutions</p>
                        </Container>
                    </Container>
                </FadeIn>
            </Jumbotron>
            <Container>
                <Jumbotron className='gallery-jumbotron'>
                    <Image src={vkbe1} className='gallery' />
                </Jumbotron>
                <Jumbotron className='gallery-jumbotron'>
                    <Image src={vkbe2} className='gallery' />
                </Jumbotron>
                <Jumbotron className='gallery-jumbotron'>
                    <Image src={vkbe3} className='gallery' />
                </Jumbotron>
                <Jumbotron className='gallery-jumbotron'>
                    <Image src={vkbe4} className='gallery' />
                </Jumbotron>
            </Container>
        </React.Fragment>
    )
}

export default Vkbe;