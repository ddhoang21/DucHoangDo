import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expanded={expanded} fixed='top' variant='dark' expand='lg' id='navigationBar'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expanded ? false : 'expanded')}/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='nav ml-auto mr-auto'>
                        <Nav.Link as={Link} to='/' onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link as={Link} to='/about' onClick={() => setExpanded(false)}>About</Nav.Link>                           
                        <Nav.Link as={Link} to='/resume' onClick={() => setExpanded(false)}>Resume</Nav.Link>               
                        <Nav.Link as={Link} to='/portfolio' onClick={() => setExpanded(false)}>Portfolio</Nav.Link>              
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default NavigationBar;
