import React from 'react';
import FadeIn from 'react-fade-in';
import Projects from '../components/PortfolioJumbotron';

const Portfolio = () => {
    return (
        <React.Fragment>
            <FadeIn delay ={100} transitionDuration={1000}>
                <Projects />
            </FadeIn>
        </React.Fragment>
    )
}

export default Portfolio;
