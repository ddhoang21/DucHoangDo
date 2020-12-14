import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { useTrail, a } from 'react-spring';
import FadeIn from 'react-fade-in';

import './style.css';

const Trail = ({ open, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 100 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
      <div className="trails-main" {...props}>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <a.div
              key={items[index]}
              className="trails-text"
              style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
              <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
          ))}
        </div>
      </div>
    )
}

const Skills = () => {
    const [open, set] = useState(true)
    return (
        <React.Fragment>
          <FadeIn delay={500}>
            <Container className='justify-content-center'>
                <p className='about-text'>Versatile frontend web developer with experience in building and maintaining responsive web applications. Recognized by peers for strong communication and problem-solving skills. Passionate about React Native and possess a high level of personal initiative to achieve goals and objectives.</p>
            </Container>
            <Container>
                <Row>
                    <Col xs={6}>
                        <h1>Resume</h1>
                    </Col>
                    <Col xs={6}>
                    <Trail open={open} onClick={() => set((state) => !state)}>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                        <span>ReactJS</span>
                        <span>Bootstrap</span>
                        <span>React Native</span>
                    </Trail>
                    </Col>
                </Row>
            </Container>
          </FadeIn>
        </React.Fragment>
    )
}

export default Skills;
