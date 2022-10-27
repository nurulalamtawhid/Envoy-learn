import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const Login = () => {
    const [error,seterror] = useState('');
    const {SignIn}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname ||'/';
    const handleSignIn =event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        SignIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            seterror('')
            navigate(from,{replace:true});
        })
        .catch(error=>
            {
                console.error(error)
                seterror(error.message)
            });
    }
    return (
        <section className="p-6 bg-violet-300 text-gray-900 mt-24">
            <form onSubmit={handleSignIn}  action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Log In</p>
                        <p className="text-xs">You must Need to Login before go</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                        <div className="col-span-full sm:col-span-3">
                            <label  className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-rose-400 border-gray-300 text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label  className="text-sm">Password</label>
                            <input id="password" type="Password" placeholder="Password" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900" required />
                        </div>

                    </div>
                    <button type="submit" className=" lg:px-4  font-semibold rounded-full bg-rose-500 text-gray-100">Login</button>
                    <p>{error}</p>
                    <p><Link to ={'/register'}> want to register</Link></p>
                </fieldset>

            </form>
        </section>
    );
};

export default Login;