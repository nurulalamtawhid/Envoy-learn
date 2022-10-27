import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLoaderData } from 'react-router-dom';
import Image from 'react-bootstrap/Image';


const Chekout = () => {
    const {user} = useContext(AuthContext);
    const purschasedCourse = useLoaderData();
    const {title,image_url
    }= purschasedCourse;
    const{displayName} = user;
    console.log(user,purschasedCourse);
    return (
        <div>
            
            <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-gray-50 text-gray-800">
                <h1 className='text-4xl font-bold'>Congratulations</h1>
                <h4>{displayName}</h4>
                <p>you have enrolled</p>

	<h2 className="text-2xl font-semibold leading-tight tracking-wide">{title}</h2>
	<Image src={image_url}></Image>
    <p><Link to={'/course'}>Go back</Link></p>
	
</div>
           
            
        </div>
    );
};

export default Chekout;