import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Component/Blog';
import Category from '../Component/Category';
import Chekout from '../Component/Chekout';
import Course from '../Component/Course';
import CourseDetails from '../Component/CourseDetails';
import Faq from '../Component/Faq';
import Home from '../Component/Home';
import Login from '../Component/Login';
import Register from '../Component/Register';
import Errorpage from '../Layout/Errorpage';
import Main from '../Layout/Main';
import CheckOut from '../Component/Chekout';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path :'/',
                element:<Home></Home>

            },
            {
                path :'/category/:id',
                element :<Category></Category>,
                loader :({params})=> fetch(`https://envoy-learn-server.vercel.app/category/${params.id}`)

            },
            {
                path :'/course',
                element:<Course></Course>,
                loader :()=> fetch("https://envoy-learn-server.vercel.app/courses")
            },
            {
                path :'/courses/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params})=> fetch(`https://envoy-learn-server.vercel.app/courses/${params.id}`)
            },
            {
                path :'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path : '/login',
                element :<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader:({params})=> fetch(`https://envoy-learn-server.vercel.app/checkout/${params.id}`)
            }
        ]
    }


])

export default routes;