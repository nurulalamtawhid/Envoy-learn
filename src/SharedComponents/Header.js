import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Brand1 from '../Assets/Brand1.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='bg-purple-400'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={Brand1}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                         
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#pricing" className='text-white'>Envoy-learning</Nav.Link>
                            
                            
                        </Nav>
                        <Nav>
                        <Nav.Link href="#features" className='text-white'>Courses</Nav.Link>
                            <Nav>
                            <Nav.Link href="#pricing" className='text-white'>Blog</Nav.Link>
                            <Nav.Link href="#pricing" className='text-white'>FAQ</Nav.Link>
                            <Nav.Link href="#features" className='text-white'>ToggoleTheme</Nav.Link>
                            <Nav.Link href="#deets" className='text-white'>DisplayName</Nav.Link>
                            </Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                Photo
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;