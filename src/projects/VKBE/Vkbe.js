import React, {useEffect} from 'react';
import {Container, Jumbotron, Button, Image} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import './style.css';
import {Link, useLocation} from 'react-router-dom';

import vkbeLogo from '../../assets/images/VKBE/vkbe-logo.png';
import vkbe1 from '../../assets/images/VKBE/vkbe-scrt.png';
import vkbe2 from '../../assets/images/VKBE/vkbe-scrt2.png';
import vkbe3 from '../../assets/images/VKBE/vkbe-scrt3.png';
import vkbe4 from '../../assets/images/VKBE/vkbe-scrt4.png';

const Vkbe = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <React.Fragment>
            <FadeIn delay ={100} transitionDuration={1000}>
                <Jumbotron fluid className='vkbe-project-jumbotron'>
                    <Button as={Link} className='back-btn shadow-none mt-4 ml-5' variant='link' to='/portfolio'><p className='back-btn-text'><strong>{"<"} Back to all projects</strong></p></Button>
                    <Container className='vkbe-project-container mt-4'>
                        <Container className='text-center'>
                            <Image src={vkbeLogo} className='vkbe-project-logo'/>
                            <p className='vkbe-project-subtitle mt-4'>A technology consulting firm specialized in delivering cloud solutions</p>
                            <Button className='back-btn shadow-none' variant='link' href='http://vkbeconsulting.com/' target='_blank'><p className='back-btn-text'><strong>Visit website</strong></p></Button>
                        </Container>
                    </Container>
                </Jumbotron>
                <Container>
                    <Jumbotron className='gallery-jumbotron'>
                        <p className='vkbe-text'>This project marked a milestone in my personal career as it is the first one I've made as a freelancer.</p>
                        <p className='vkbe-text'>I'm proud of this achievement because I was able to incorporate all functionalities and features required by the client.</p>
                        <p className='vkbe-text'>While working on this project, I've gained more knowledge on how to enhance user experience which gave me a better understanding of industry standards.</p>
                    </Jumbotron>
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
                <div className='skip-buttons'>
                    <Button as ={Link} className='back-btn shadow-none mt-4 ml-5' variant='link' to='/portfolio'><p className='back-btn-text'><strong>{"<"} Back</strong></p></Button>
                    <Button as ={Link} className='back-btn shadow-none mt-4 mr-5' variant='link' to='/portfolio/bookityourself'><p className='back-btn-text'><strong>Next project {">"}</strong></p></Button>
                </div>
            </FadeIn>
        </React.Fragment>
    )
}

export default Vkbe;
