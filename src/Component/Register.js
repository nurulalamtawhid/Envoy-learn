import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Context/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error,seterror] = useState('');
    const{createUser, updateuserprofile} =useContext(AuthContext);
    const handleRegister = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL,email,password);
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log((user));
            seterror('');
            form.reset();
            handleupdateprofile(name,photoURL)
            toast.success("congratulations", {
                position: toast.POSITION.TOP_CENTER
        });
    })
        .catch(error=>{
            console.error(error);
            seterror(error.message);


        })
    }
    const handleupdateprofile=(name,photoURL)=>{
        const profile ={
            displayName : name,
            photoURL : photoURL
        }
        updateuserprofile(profile)
        .then (()=>{ })
        .catch(error => console.error(error))
    }
    return (
        <section className="p-6 bg-violet-300 text-gray-900 mt-24">
            <form onSubmit={handleRegister}  action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Lets Register Your Self</p>
                        <p className="text-xs">Thank you for being With us</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Your Name</label>
                            <input id="name" type="text" placeholder="Your Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-rose-400 border-gray-300 text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label  className="text-sm">PhotoUrl</label>
                            <input id="photourl" type="text" placeholder="PhotoUrl" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-rose-400 border-gray-300 text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label  className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-rose-400 border-gray-300 text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label  className="text-sm">Password</label>
                            <input id="password" type="Password" placeholder="Password" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900" required />
                        </div>

                    </div>
                    <button type="submit" className=" lg:px-6  font-normal rounded-full bg-rose-500 text-gray-100">Register</button>
                    <p><Link to ={'/login'}> Login</Link></p>
                    
                </fieldset>
                <ToastContainer></ToastContainer>

            </form>
        </section>
    );
};

export default Register;