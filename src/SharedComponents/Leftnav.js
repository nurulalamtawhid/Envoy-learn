import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Leftnav = () => {
    const [categories,setcategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setcategories(data))
    },[]);
    return (
        <div>
           <div className='mt-2 px-2 d-flex'>
           <button type="button" className="px-8 py-3 mx-2 font-semibold rounded-full bg-gray-800 text-gray-100 d-flex align-items-center "><FaGoogle></FaGoogle>Google logIn</button>
            <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100 d-flex align-items-center "><FaGithub className=''></FaGithub>Github logIn</button>
           </div>
            
            <div className='mt-2'>
                {
                    categories.map(categori=><div className=" rounded-md shadow-md bg-violet-300 mb-2 text-gray-800"  key={categori.id}>
                    
                    <div className="flex flex-col justify-between p-6">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold tracking-wide"><Link className='no-underline'  to={`/category/${categori.id}`}>{categori.name}</Link></h2>
                            
                        </div>
                       
                    </div>
                </div>)
                }
            </div>
            
        </div>
    );
};

export default Leftnav;