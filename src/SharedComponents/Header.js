import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import Brand1 from '../Assets/Brand1.png'
import { FaUser } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Context/Authprovider';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';



const Header = () => {
    const {user,Signingout} = useContext(AuthContext);
    const handleSignout=()=>{
        Signingout()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    const [dark,setdark] = useState({
        backgroundColor: 'black',
        color :'white'
    })
    const [btntext,setbtntext] = useState('Dark')
    const togglebtn =()=>{
        if(dark.color ==='white'){
            setdark(
                {
                   backgroundColor:'white',
                    color:"black"
                }
            )
            setbtntext('Light')
        }
        else{
            setdark(
                {
                    backgroundColor:'black',
                    color:"white"
                }
            )
            setbtntext('Dark')
            
        }
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='bg-purple-400'>
                <Container>
                    <Navbar.Brand href="#">
                        <Link to={'/'}
                            className='mt'
                        >
                            <img
                                src={Brand1}
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />

                        </Link>

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
                                <Nav.Link href="" className='text-white'>
                                <button type="button" onClick={togglebtn} className="px-4  font-semibold rounded-full" style={dark}>{btntext}</button>
                                    
                                </Nav.Link>
                                <Nav.Link eventKey={2} >
                            {
                                    user?.photoURL ?
                                   
                                         <Image 
                                   
                                    style={{height : '40px'}}
                                    roundedCircle
                                    src={user?.photoURL}
                                    >
                                        
                                    </Image>

                                  
                                   
                                    : <FaUser></FaUser>
                                }
                            </Nav.Link>
                                <Nav.Link  className='text-white'>
                                {
                                    user?.uid?
                                    <>
                                    <span> {user?.displayName}</span>
                                    <button type="button" onClick={handleSignout} className="px-4  font-semibold rounded-full bg-gray-800 text-gray-100">Signout</button>
                                    
                                    
                                    </>
                                    :
                                    <>
                                       <Link to='/login'><button type="button" className="px-4  font-semibold rounded-full bg-gray-800 text-gray-100">Login</button></Link>
                                       <Link to='/register'><button type="button" className="px-4 mx-2 font-semibold rounded-full bg-rose-500 text-gray-100">Register</button></Link> 
                                    </>
                                }
                                </Nav.Link>
                            </Nav>
                           
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;