import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Component/Blog';
import Course from '../Component/Course';
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
                path :'/course',
                element:<Course></Course>
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