import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

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
                        <Nav.Link href=""><Link to={'/'} className='text-white text-2xl no-underline'>Envoy-learning</Link></Nav.Link>
                            
                            
                        </Nav>
                        <Nav>
                        <Nav.Link href=""><Link to={"/course"} className='text-white no-underline'>Courses</Link></Nav.Link>
                            <Nav>
                            <Nav.Link href="#"><Link to={"/blog"} className='text-white no-underline'>Blog</Link></Nav.Link>
                            <Nav.Link href="#"><Link to={'/faq'} className='text-white no-underline'>FAQ </Link> </Nav.Link>
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