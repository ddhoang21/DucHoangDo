import React, {useEffect} from 'react';
import {Container, Jumbotron, Button, Image} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import './style.css';
import {Link, useLocation} from 'react-router-dom';

import BIY1 from '../../assets/images/Book-It-Yourself/BIY-1.png';
import BIY2 from '../../assets/images/Book-It-Yourself/BIY-2.png';
import BIY3 from '../../assets/images/Book-It-Yourself/BIY-3.png';
import BIY4 from '../../assets/images/Book-It-Yourself/BIY-4.png';
import BIY5 from '../../assets/images/Book-It-Yourself/BIY-5.png';
import BIY6 from '../../assets/images/Book-It-Yourself/BIY-6.png';

const BookItYourself = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <React.Fragment>
            <FadeIn delay ={100} transitionDuration={1000}>
                <Jumbotron fluid className='BIY-project-jumbotron'>
                    <Button as={Link} className='back-btn shadow-none mt-4 ml-5' variant='link' to='/portfolio'><p className='back-btn-text'><strong>{"<"} Back to all projects</strong></p></Button>
                    <Container className='BIY-project-container mt-4'>
                        <Container className='text-center'>
                            <h1 className='BIY-project-title mt-4'>Book-It-Yourself</h1>
                            <p className='BIY-project-subtitle mt-4'>A social networking site that lets artists and promoters connect with each other across the globe</p>
                            <Button className='back-btn shadow-none' variant='link' href='https://book-it-yourself.herokuapp.com/' target='_blank'><p className='back-btn-text'><strong><u>Visit website</u></strong></p></Button>
                        </Container>
                    </Container>
                </Jumbotron>
                <Container>
                    <Jumbotron className='gallery-jumbotron'>
                        <p className='project-title'><strong>About</strong></p>
                            <p className='project-text'>This was our final group project during Bootcamp. It was a challenging period because it was the beginning of Covid.</p>
                            <p className='project-text'>I'm proud of this project because although we weren't prepared to work virtually, we still managed to finish the work on time.</p>
                            <p className='project-text'>This experience improved my efficiency working as part of a team but also taught me to manage my time better and prioritize more important tasks.</p>

                        <p className='project-title mt-5'><strong>Technologies</strong></p>
                            <ul>
                                <li className='project-text'>Build with MongoDB, Express, React and Node.js</li>
                                <li className='project-text'>Responsive progressive web app designed with React-Bootstrap</li>
                                <li className='project-text'>Enabled user authentication with Passport.js</li>
                                <li className='project-text'>Applied offline functionality using localForage</li>
                            </ul>
                    </Jumbotron>
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
                    <Button as ={Link} className='back-btn shadow-none mt-4 ml-5' variant='link' to='/portfolio/vkbe'><p className='back-btn-text'><strong>{"<"} Previous project</strong></p></Button>
                    <Button as ={Link} className='back-btn shadow-none mt-4 mr-5' variant='link' to='/portfolio/rinqydink'><p className='back-btn-text'><strong>Next project {">"}</strong></p></Button>
                </div>
            </FadeIn>
        </React.Fragment>
    )
}

export default BookItYourself;
