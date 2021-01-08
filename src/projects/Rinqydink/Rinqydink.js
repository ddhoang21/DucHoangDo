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
                        <Button as={Link} className='back-btn shadow-none mt-4 ml-5' variant='link' to='/portfolio'><p className='back-btn-text'>{"<"} Back to all projects</p></Button>
                        <Container className='rinqydink-project-container mt-4'>
                            <Container className='text-center'>
                                <h1 className='rinqydink-project-title mt-4'>Rinqydink Arcade</h1>
                                <p className='rinqydink-project-subtitle mt-4'>An online gaming web app letting users compete and interact with each other</p>
                            </Container>
                        </Container>
                </Jumbotron>
                <Container>
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
                    <Button as ={Link} className='back-btn shadow-none mt-4 ml-5' variant='link' to='/portfolio/bookityourself'><p className='back-btn-text'>{"<"} Previous project</p></Button>
                    <Button as ={Link} className='back-btn shadow-none mt-4 mr-5' variant='link' to='/portfolio'><p className='back-btn-text'>Next project {">"}</p></Button>
                </div>
            </FadeIn>
        </React.Fragment>
    )
}

export default Rinqydink;
