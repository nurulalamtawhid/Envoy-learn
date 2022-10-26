import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Component/Blog';
import Category from '../Component/Category';
import Course from '../Component/Course';
import CourseDetails from '../Component/CourseDetails';
import Faq from '../Component/Faq';
import Home from '../Component/Home';
import Errorpage from '../Layout/Errorpage';
import Main from '../Layout/Main';

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
                loader :({params})=> fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path :'/course',
                element:<Course></Course>,
                loader :()=> fetch("http://localhost:5000/courses")
            },
            {
                path :'/courses/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path :'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            }
        ]
    }


])

export default routes;