import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coursecard from './Coursecard';

const Category = () => {
    const categorycourse = useLoaderData();
    return (
        <div>
            <h2>no of course : {categorycourse.length}</h2>
            {
                categorycourse.map(course=><Coursecard
                
                    key={course._id}
                    course ={course}
                
                
                ></Coursecard>)
            }
            
        </div>
    );
};

export default Category;