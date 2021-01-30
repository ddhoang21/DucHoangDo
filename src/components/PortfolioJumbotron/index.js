import React, {useEffect} from 'react';
import {Container, Jumbotron, Button, Image} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import {Link, useLocation} from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';

import vkbeLogo from '../../assets/images/VKBE/vkbe-logo.png';
import vkbe1 from '../../assets/images/VKBE/vkbe-scrt.png';
import rinqydink from '../../assets/images/Rinqydink/rinqydink1.png';
import BIY1 from '../../assets/images/Book-It-Yourself/BIY-1.png';

const Projects = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <React.Fragment>
            <FadeIn delay ={100} transitionDuration={1000}>
                <Jumbotron fluid className='portfolio-container'>
                    <Container>
                        <h1 className='portfolio-title text-center mb-4'>Some of my work</h1>
                        <Container className='brand-icons mt-5'>
                            <FontAwesomeIcon icon={faHtml5} size='4x' className='html-icon' />
                            <FontAwesomeIcon icon={faCss3Alt} size='4x' className='css-icon' />
                            <FontAwesomeIcon icon={faJsSquare} size='4x' className='js-icon' />
                            <FontAwesomeIcon icon={faReact} size='4x' className='react-icon' />
                            <FontAwesomeIcon icon={faBootstrap} size='4x' className='bootstrap-icon' />
                        </Container>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid className='vkbe-jumbotron mb-0'>
                    <Container className='text-center'>
                        <Image src={vkbeLogo} className='vkbe-logo' />
                        <Button as={Link} className='vkbe-btn shadow-none mt-3' variant='link' to='/portfolio/vkbe'><Image src={vkbe1} className='vkbe-pic1'/></Button>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid className='BIY-jumbotron mb-0'>
                    <Container className='text-center'>
                        <h1 className='BIY-title'>Book-It-Yourself</h1>
                        <Button as ={Link} className='vkbe-btn shadow-none mt-3' variant='link' to='/portfolio/bookityourself'><Image src={BIY1} className='vkbe-pic1'/></Button>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid className='rinqydink-jumbotron mb-0'>
                    <Container className='text-center'>
                        <h1 className='rinqydink-title'>Rinqydink</h1>
                        <Button as ={Link} className='vkbe-btn shadow-none mt-3' variant='link' to='/portfolio/rinqydink'><Image src={rinqydink} className='vkbe-pic1'/></Button>
                    </Container>
                </Jumbotron>
            </FadeIn>
        </React.Fragment>
    )
}

export default Projects;
