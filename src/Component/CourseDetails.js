import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";

const CourseDetails = () => {
    const coursedetails = useLoaderData();
    const {title,image_url,details,rating} =coursedetails;
    console.log(coursedetails);
    return (
        <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
        <div className="space-y-4">
            <div className="space-y-2">
                <img src={image_url} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            </div>
            <div className="space-y-2">
                
                    <h3 className="text-xl font-semibold text-emerald-600">{title}</h3>
                
                <p className="leading-snug text-gray-600">{details}</p>
                <div className='d-flex align-middle '>
                <FaRegStar></FaRegStar>
                <p>{rating.number}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-emerald-600 text-gray-50">Premium Access</button>
            </div>
        </div>
    </div>
    );
};

export default CourseDetails;