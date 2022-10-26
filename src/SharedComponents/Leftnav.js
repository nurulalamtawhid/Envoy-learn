import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Leftnav = () => {
    const [categories,setcategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setcategories(data))
    },[]);
    return (
        <div>
            
            <div className='mt-2'>
                {
                    categories.map(categori=><div className=" rounded-md shadow-md bg-violet-300 mb-2 text-gray-800" id={categori.id}>
                    
                    <div className="flex flex-col justify-between p-6">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold tracking-wide">{categori.name}</h2>
                            
                        </div>
                       
                    </div>
                </div>)
                }
            </div>
            
        </div>
    );
};

export default Leftnav;