import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import { useSpring, animated as a } from 'react-spring';
import './style.css';

const Card1 = () => {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <React.Fragment>
            <Container>
                <div onClick={() => set(state => !state)}>
                    <a.div className="card1 back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
                    <a.div className="card1 front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Card1;
