import React from 'react';
import { Link } from 'react-router-dom';

const Coursecard = ({course}) => {
    const{title,image_url,details,_id} = course;
    
    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800 mt-2 mb-4">
            
            <img src={image_url} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    <p className="text-gray-800">
                    {details.length>120 ? 
                        <p>{details.slice(0,120) + '...'}<Link to={`/courses/${_id}`} >Read more</Link></p>
                        :
                        <p>{details}</p>
                        }
                    </p>
                </div>
              
            </div>
        </div>
    );
};

export default Coursecard;