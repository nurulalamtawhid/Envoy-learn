import React from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import { FaRegStar,FaPrint } from "react-icons/fa";
import Footer from '../SharedComponents/Footer';

const CourseDetails = () => {
    const coursedetails = useLoaderData();
     console.log(coursedetails);
    const { title, image_url, details, rating, _id
    } = coursedetails;
    const handleprint =()=>{
        console.log('mama khelar hoise');
    }
    

    return (
        <div className="max-w-lg p-4 shadow-md mb-4 bg-gray-50 text-gray-800">
            <FaPrint onClick={handleprint} className='ml-8 mb-2'></FaPrint>
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
                    <Link to={`/checkout/${_id}`}>
                        <button type="button"   className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-emerald-600 text-gray-50">Premium Access</button>
                        </Link>

                    
                </div>
            </div>
            <div className='d-none'>
                <Footer></Footer>

            </div>
        </div>
    );
};

export default CourseDetails;