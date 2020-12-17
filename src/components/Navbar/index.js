import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expanded={expanded} fixed='top' variant='dark' expand='lg' id='navigationBar'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expanded ? false : 'expanded')}/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='nav ml-auto mr-auto'>
                        <Nav.Link as={NavLink} exact to='/' activeStyle={{
                            fontWeight: "800",
                            color: "#0000AE"
                        }} onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/about' activeStyle={{
                            fontWeight: "800",
                            color: "#0000AE"
                        }} onClick={() => setExpanded(false)}>About</Nav.Link>                                         
                        <Nav.Link as={NavLink} to='/portfolio' activeStyle={{
                            fontWeight: "800",
                            color: "#0000AE"
                        }} onClick={() => setExpanded(false)}>Portfolio</Nav.Link>              
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default NavigationBar;
