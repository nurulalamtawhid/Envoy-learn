import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Context/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Leftnav = () => {
    const [categories,setcategories] = useState([]);
    useEffect(()=>{
        fetch('https://envoy-learn-server.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setcategories(data))
    },[]);
    const {providerlogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const handleGoogleSignIn =()=>{
        providerlogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    const handleGitSignIn = ()=>{
        providerlogin(gitProvider)
        .then(result=>{
            const user = result.user;
            
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
           <div className='mt-2 px-2 d-flex'>
           <button type="button" onClick={ handleGoogleSignIn} className="px-8 py-3 mx-2 font-semibold rounded-full bg-gray-800 text-gray-100 d-flex align-items-center "><FaGoogle></FaGoogle>Google logIn</button>
            <button type="button" onClick={handleGitSignIn} className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100 d-flex align-items-center "><FaGithub className=''></FaGithub>Github logIn</button>
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