import React from 'react';
import {Container, Jumbotron, Button, Image} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import './style.css';
import {Link} from 'react-router-dom';

import BIY1 from '../../assets/images/Book-It-Yourself/BIY-1.png';
import BIY2 from '../../assets/images/Book-It-Yourself/BIY-2.png';
import BIY3 from '../../assets/images/Book-It-Yourself/BIY-3.png';
import BIY4 from '../../assets/images/Book-It-Yourself/BIY-4.png';
import BIY5 from '../../assets/images/Book-It-Yourself/BIY-5.png';
import BIY6 from '../../assets/images/Book-It-Yourself/BIY-6.png';

const BookItYourself = () => {
    return (
        <React.Fragment>
            <FadeIn delay ={100} transitionDuration={1000}>
                <Jumbotron fluid className='BIY-project-jumbotron'>
                    <Button as={Link} className='back-btn shadow-none mt-4 ml-5' variant='link' to='/portfolio'><p className='back-btn-text'>{"<"} Back to all projects</p></Button>
                    <Container className='BIY-project-container mt-4'>
                        <Container className='text-center'>
                            <h1 className='BIY-project-title mt-4'>Book-It-Yourself</h1>
                            <p className='BIY-project-subtitle mt-4'>A social networking site that lets artists and promoters connect with each other across the globe</p>
                        </Container>
                    </Container>
                </Jumbotron>
                <Container>
                    <Jumbotron className='gallery-jumbotron'>
                        <Image src={BIY1} className='gallery' />
                    </Jumbotron>
                    <Jumbotron className='gallery-jumbotron'>
                        <Image src={BIY2} className='gallery' />
                    </Jumbotron>
                    <Jumbotron className='gallery-jumbotron'>
                        <Image src={BIY3} className='gallery' />
                    </Jumbotron>
                    <Jumbotron className='gallery-jumbotron'>
                        <Image src={BIY4} className='gallery' />
                    </Jumbotron>
                    <Jumbotron className='gallery-jumbotron'>
                        <Image src={BIY5} className='gallery' />
                    </Jumbotron>
                    <Jumbotron className='gallery-jumbotron'>
                        <Image src={BIY6} className='gallery' />
                    </Jumbotron>
                </Container>
                <div className='skip-buttons'>
                    <Button className='back-btn shadow-none mt-4 ml-5' variant='link' href='/portfolio/vkbe'><p className='back-btn-text'>{"<"} Previous project</p></Button>
                    <Button className='back-btn shadow-none mt-4 mr-5' variant='link' href='/portfolio/rinqydink'><p className='back-btn-text'>Next project {">"}</p></Button>
                </div>
            </FadeIn>
        </React.Fragment>
    )
}

export default BookItYourself;
