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
            <Jumbotron fluid className='BIY-project-jumbotron'>
                <FadeIn delay ={100} transitionDuration={1000}>
                    <Button as={Link} className='back-btn shadow-none mt-4 ml-5' variant='link' to='/portfolio'><p className='back-btn-text'>{"<"} Back to projects</p></Button>
                    <Container className='BIY-project-container mt-4'>
                        <Container className='text-center'>
                            <h1 className='BIY-project-title mt-4'>Book-It-Yourself</h1>
                            <p className='BIY-project-subtitle mt-4'>An app that connects artists and promoters across the globe</p>
                        </Container>
                    </Container>
                </FadeIn>
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
        </React.Fragment>
    )
}

export default BookItYourself;
