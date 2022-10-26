import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Leftnav from '../SharedComponents/Leftnav';

const Course = () => {
    return (
       <div>
         <Container>
            <Row>
                <Col lg='4'><Leftnav></Leftnav></Col>
                <Col><h4>hi</h4></Col>
            </Row>
        </Container>
       </div>
    );
};

export default Course;