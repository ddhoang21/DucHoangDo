import React, {useEffect} from 'react';
import {Container, Jumbotron, Button, Image} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import './style.css';
import {Link, useLocation} from 'react-router-dom';

import rinqydink1 from '../../assets/images/Rinqydink/rinqydink1.png';
import rinqydink2 from '../../assets/images/Rinqydink/rinqydink2.png';
import rinqydink3 from '../../assets/images/Rinqydink/rinqydink3.png';
import rinqydink4 from '../../assets/images/Rinqydink/rinqydink4.png';
import rinqydink5 from '../../assets/images/Rinqydink/rinqydink5.png';
import rinqydink6 from '../../assets/images/Rinqydink/rinqydink6.png';

const Rinqydink = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <React.Fragment>
            <FadeIn delay ={100} transitionDuration={1000}>
                <Jumbotron fluid className='rinqydink-project-jumbotron'>
                        <Button as={Link} className='back-btn shadow-none mt-4 ml-5' variant='link' to='/portfolio'><p className='back-btn-text'><strong>{"<"} Back to all projects</strong></p></Button>
                        <Container className='rinqydink-project-container mt-4'>
                            <Container className='text-center'>
                                <h1 className='rinqydink-project-title mt-4'>Rinqydink Arcade</h1>
                                <p className='rinqydink-project-subtitle mt-4'>An online gaming web app letting users compete and interact with each other</p>
                                <Button className='back-btn shadow-none' variant='link' href='https://rinqydinky.herokuapp.com/' target='_blank'><p className='back-btn-text'><strong>Visit website</strong></p></Button>
                            </Container>
                        </Container>
                </Jumbotron>
                <Container>
                    <Jumbotron className='gallery-jumbotron'>
                        <p className='vkbe-text'>This project is significant to me because it ignited my passion for front end development. I realized that it was a career I wanted to pursue.</p>
                        <p className='vkbe-text'>I was responsible for the website's interface and understood how critical the users' experience is when designing an application.</p>
                        <p className='vkbe-text'>I was also in charge of the users' authentication which is where I struggled the most but also acknowledged the importance of security and protection of users' credentials.</p>
                    </Jumbotron>
                    <Jumbotron className='gallery-jumbotron'>
                        <Image src={rinqydink1} className='gallery' />
                    </Jumbotron>
                    <Jumbotron className='gallery-jumbotron'>
                        <Image src={rinqydink2} className='gallery' />
                    </Jumbotron>
                    <Jumbotron className='gallery-jumbotron'>
                        <Image src={rinqydink3} className='gallery' />
                    </Jumbotron>
                    <Jumbotron className='gallery-jumbotron'>
                        <Image src={rinqydink4} className='gallery' />
                    </Jumbotron>
                    <Jumbotron className='gallery-jumbotron'>
                        <Image src={rinqydink5} className='gallery' />
                    </Jumbotron>
                    <Jumbotron className='gallery-jumbotron'>
                        <Image src={rinqydink6} className='gallery' />
                    </Jumbotron>
                </Container>
                <div className='skip-buttons'>
                    <Button as ={Link} className='back-btn shadow-none mt-4 ml-5' variant='link' to='/portfolio/bookityourself'><p className='back-btn-text'><strong>{"<"} Previous project</strong></p></Button>
                    <Button as ={Link} className='back-btn shadow-none mt-4 mr-5' variant='link' to='/portfolio'><p className='back-btn-text'><strong>Next project {">"}</strong></p></Button>
                </div>
            </FadeIn>
        </React.Fragment>
    )
}

export default Rinqydink;
