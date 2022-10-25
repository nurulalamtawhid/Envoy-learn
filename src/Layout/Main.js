import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponents/Footer';
import Header from '../SharedComponents/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Outlet></Outlet>

            </Container>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;