import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Leftnav from '../SharedComponents/Leftnav';
import Coursecard from './Coursecard';


const Course = () => {
    const courses = useLoaderData();
    //console.log(courses);
    return (
       <div>
        
            <Row>
                <Col lg='4'><Leftnav></Leftnav></Col>
                <Col className='lg:grid grid-cols-3 gap-4'>
                {
                    courses.map(course=><Coursecard
                    key={course._id}
                    course ={course}></Coursecard>
                    
                    
                    )
                }
                
                </Col>
            </Row>
        
       </div>
    );
};

export default Course;